function tests()
    clear all;
    clc;
    fprintf("\n\033[34m===== Running Tests =====\033[0m\n");

    epsilon = 1e-3;

    % Helper function for colored output
    function print_result(name, success)
        if success
            fprintf("\033[32m[SUCCESS]\033[0m %s\n", name);
        else
            fprintf("\033[31m[ERROR]\033[0m %s\n", name);
        end
    end


    function assert_in_range(name, current, expected)
        if abs(current-expected)<epsilon
            fprintf("\033[32m[SUCCESS]\033[0m %s\n", name);
        else
            fprintf("\033[31m[ERROR]\033[0m %s (current: %d / expected: %d)\n", name, current, expected);
        end
    end

    function assert_integration(name, itg, f, a, b, n, expected)
        assert_in_range(name, itg.integrate(f, a, b, n), expected);
    end

    try
        fprintf("\n\033[34m===== Constructor Tests =====\033[0m\n");
        itg = integrator("method", "trapezes", "dx", 0.05);
        print_result("Constructor with arguments", strcmp(itg.get("method"), "trapezes") && itg.get("dx") == 0.05);

        itg2 = integrator(itg);
        print_result("Copy constructor", strcmp(itg2.get("method"), "trapezes") && itg2.get("dx") == 0.05);

        fprintf("\n\033[34m===== Set & Get Tests =====\033[0m\n");
        itg.set("method", "gauss2", "dx", 0.1);
        print_result("Set method and dx", strcmp(itg.get("method"), "gauss2") && itg.get("dx") == 0.1);

        fprintf("\n\033[34m===== Integration Tests =====\033[0m\n");
        fprintf("\n  \033[34m=== Trapezes Tests ===\033[0m\n");

        itg.set("method", "trapezes");
        assert_integration("Trapezoidal integration x^2 (a=0, b=1)", itg, @(x) x.^2, 0, 1, 100, 1/3);
        assert_integration("Trapezoidal integration sin (a=0, b=2*pi)", itg, @sin, 0, 2*pi, 100, 0);
        assert_integration("Trapezoidal integration cos (a=0, b=2*pi)", itg, @cos, 0, 2*pi, 100, 0);
        assert_integration("Trapezoidal integration xsin(x^2) (a=0, b=sqrt(pi))", itg, @(x) x .* sin(x.^2), 0, sqrt(pi), 100, 1);
        assert_integration("Trapezoidal integration xe^x (a=0, b=1)", itg, @(x) x .* exp(x), 0, 1, 100, 1);

        fprintf("\n  \033[34m=== Gauss2 Tests ===\033[0m\n");

        itg.set("method", "gauss2");

        assert_integration("Gauss2 integration x", itg, @(x) x, 0, 1, 100, 0.5);
        assert_integration("Gauss2 integration x^2 (a=0, b=1)", itg, @(x) x.^2, 0, 1, 100, 1/3);
        assert_integration("Gauss2 integration sin (a=0, b=2*pi)", itg, @sin, 0, 2*pi, 100, 0);
        assert_integration("Gauss2 integration cos (a=0, b=2*pi)", itg, @cos, 0, 2*pi, 100, 0);
        assert_integration("Gauss2 integration xsin(x^2) (a=0, b=sqrt(pi))", itg, @(x) x .* sin(x.^2), 0, sqrt(pi), 100, 1);
        assert_integration("Gauss2 integration xe^x (a=0, b=1)", itg, @(x) x .* exp(x), 0, 1, 100, 1);

        fprintf("\n\033[34m===== Additional Integration Tests =====\033[0m\n");
        itg.set("method", "middle");
        I = itg.integrate(@(x) sin(x), 0, pi, 100, []);
        expected = 2;
        assert_in_range("Middle-point integration sin(x) over [0, pi]", I, expected);

        itg.set("method", "gauss3");
        I = itg.integrate(@(x) exp(-x.^2), -1, 1, 100, []);
        expected = 1.4936;
        assert_in_range("Gauss3 integration exp(-x^2) over [-1,1]", I, expected);

        fprintf("\n\033[34m===== More Complex Integrals =====\033[0m\n");
        I = itg.integrate(@(x) log(1 + x), 0, 1, 100, []);
        expected = 0.3863;
        assert_in_range("Integration of log(1+x) over [0,1]", I, expected);

        I = itg.integrate(@(x) sqrt(x), 0, 1, 100, []);
        expected = 2/3;
        assert_in_range("Integration of sqrt(x) over [0,1]", I, expected);

        fprintf("\n\033[34m===== Primitive Tests =====\033[0m\n");
        y = itg.primitive(@(x) x.^2, 0, 1);
        expected = 1/3;
        assert_in_range("Primitive of x^2 from 0 to 1", y, expected);

        y = itg.primitive(@(x) cos(x), 0, pi/2);
        expected = 1;
        assert_in_range("Primitive of cos(x) from 0 to pi/2", y, expected);

        fprintf("\n\033[34m===== Integration Error Tests =====\033[0m\n");
        ns = [10, 20, 50, 100];
        [C, alpha] = itg.integration_error(@(x) x.^2, 0, 1, 1/3, ns, []);
        print_result("Integration error model", C > 0 && alpha > 0);

        [C, alpha] = itg.integration_error(@(x) exp(-x), 0, 1, 1 - exp(-1), ns, []);
        print_result("Integration error model for exp(-x)", C > 0 && alpha > 0);

        fprintf("\n\033[34m===== All Tests Completed =====\033[0m\n");
    catch ME
        fprintf("\033[31m[ERROR]\033[0m Test failed: %s\n", ME.message);
    end
end
