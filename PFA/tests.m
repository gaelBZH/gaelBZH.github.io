function tests()
    clc;
    fprintf("\n\033[34m===== Running Tests =====\033[0m\n");
    
    % Helper function for colored output
    function print_result(name, success)
        if success
            fprintf("\033[32m[SUCCESS]\033[0m %s\n", name);
        else
            fprintf("\033[31m[ERROR]\033[0m %s\n", name);
        end
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
        itg.set("method", "trapezes");
        I = itg.integrate(@(x) x.^2, 0, 1, 100, []);
        expected = 1/3;
        print_result("Trapezoidal integration x^2", abs(I - expected) < 1e-3);
        
        itg.set("method", "gauss2");
        I = itg.integrate(@(x) x, 0, 1, 100, []);
        expected = 0.5;
        print_result("Gauss2 integration x", abs(I - expected) < 1e-3);
        
        fprintf("\n\033[34m===== Additional Integration Tests =====\033[0m\n");
        itg.set("method", "middle");
        I = itg.integrate(@(x) sin(x), 0, pi, 100, []);
        expected = 2;
        print_result("Middle-point integration sin(x) over [0, pi]", abs(I - expected) < 1e-3);
        
        itg.set("method", "gauss3");
        I = itg.integrate(@(x) exp(-x.^2), -1, 1, 100, []);
        expected = 1.4936;
        print_result("Gauss3 integration exp(-x^2) over [-1,1]", abs(I - expected) < 1e-3);
        
        fprintf("\n\033[34m===== More Complex Integrals =====\033[0m\n");
        I = itg.integrate(@(x) log(1 + x), 0, 1, 100, []);
        expected = 0.3863;
        print_result("Integration of log(1+x) over [0,1]", abs(I - expected) < 1e-3);
        
        I = itg.integrate(@(x) sqrt(x), 0, 1, 100, []);
        expected = 2/3;
        print_result("Integration of sqrt(x) over [0,1]", abs(I - expected) < 1e-3);
        
        fprintf("\n\033[34m===== Primitive Tests =====\033[0m\n");
        y = itg.primitive(@(x) x.^2, 0, 1);
        expected = 1/3;
        print_result("Primitive of x^2 from 0 to 1", abs(y - expected) < 1e-3);
        
        y = itg.primitive(@(x) cos(x), 0, pi/2);
        expected = 1;
        print_result("Primitive of cos(x) from 0 to pi/2", abs(y - expected) < 1e-3);
        
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
