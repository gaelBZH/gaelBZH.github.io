% File: test_integrator.m

% Clear workspace and load the integrator class
clear all;
clc;

% ANSI escape codes for color
red = "\033[31m";     % Red
green = "\033[32m";   % Green
yellow = "\033[33m";  % Yellow
blue = "\033[34m";    % Blue
magenta = "\033[35m"; % Magenta
cyan = "\033[36m";    % Cyan
white = "\033[37m";   % White
bright_black = "\033[30;1m"; % Bright black (gray)
bright_red = "\033[31;1m";   % Bright red
bright_green = "\033[32;1m"; % Bright green
bright_yellow = "\033[33;1m";% Bright yellow
bright_blue = "\033[34;1m";  % Bright blue
bright_magenta = "\033[35;1m";% Bright magenta
bright_cyan = "\033[36;1m";  % Bright cyan
bright_white = "\033[37;1m"; % Bright white

reset = "\033[0m";    % Reset to default color


% Instantiate the class
itg = integrator();

disp([bright_cyan, "Origin Case", reset])
itg.disp();

disp([bright_magenta, ""])
disp("------------------------------------------------")
disp(" FFFFF   U   U   N   N   CCCC      0000      1  ")
disp(" F       U   U   NN  N   C        0    0    11  ")
disp(" FFFF    U   U   N N N   C        0    0   1 1  ")
disp(" F       U   U   N  NN   C        0    0     1  ")
disp(" F        UUU    N   N   CCCC      000      111 ")
disp("------------------------------------------------")
disp(["", reset])

% Test 0001: Test setting a valid 'method' property
disp([bright_yellow, "Test 0001: ", reset, "Setting 'method' to 'left'..."]);
itg.set("method", "left");
if strcmp(itg.get("method"), "left")
    disp([green, "SUCCESS", reset]);
else
    disp([red, "ERROR", reset]);
end
% Test 0002: Test setting a valid 'dx' property
disp([bright_yellow, "Test 0002: ", reset, "Setting 'dx' to 0.05..."]);
itg.set("dx", 0.05);
if itg.get("dx") == 0.05
    disp([green, "SUCCESS", reset]);
else
    disp([red, "ERROR", reset]);
end
% Test 0003: Test setting both 'method' and 'dx' at once
disp([bright_yellow, "Test 0003: ", reset, "Setting 'method' to 'trapezes' and 'dx' to 0.1..."]);
itg.set("method", "trapezes", "dx", 0.1);
if strcmp(itg.get("method"), "trapezes") && itg.get("dx") == 0.1
    disp([green, "SUCCESS", reset]);
else
    disp([red, "ERROR", reset]);
end
% Test 0004: Test setting an invalid 'method'
try
    disp([bright_yellow, "Test 0004: ", reset, "Testing invalid 'method' value 'unknown'..."]);
    itg.set("method", "unknown");
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0005: Test setting an invalid 'dx'
try
    disp([bright_yellow, "Test 0005: ", reset, "Testing invalid 'dx' value -0.1..."]);
    itg.set("dx", -0.1);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0006: Test setting an unknown property
try
    disp([bright_yellow, "Test 0006: ", reset, "Testing unknown property 'invalid_prop'..."]);
    itg.set("invalid_prop", 42);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end

disp([bright_magenta, ""])
disp("------------------------------------------------")
disp(" FFFFF   U   U   N   N   CCCC      0000    222  ")
disp(" F       U   U   NN  N   C        0    0      2 ")
disp(" FFFF    U   U   N N N   C        0    0     2  ")
disp(" F       U   U   N  NN   C        0    0    2   ")
disp(" F        UUU    N   N   CCCC      000     2222 ")
disp("------------------------------------------------")
disp(["", reset])

% Test 0001: Test integration with valid inputs (simple function)
try
    disp([bright_yellow, "Test 0001: ", reset, "Testing integration with valid inputs..."]);
    f = @(x) x.^2;
    a = 0;
    b = 1;
    n = 100;
    I = itg.integrate(f, a, b, n);
    disp([green, "SUCCESS", reset]);
    %disp(["Approximated Integral: ", num2str(I)]);
catch ME
    disp([red, "ERROR", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0002: Test integration with invalid function (non-handle)
try
    disp([bright_yellow, "Test 0002: ", reset, "Testing invalid function type..."]);
    f = "x^2";
    a = 0;
    b = 1;
    n = 100;
    I = itg.integrate(f, a, b, n);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0003: Test integration with invalid bounds (a > b)
try
    disp([bright_yellow, "Test 0003: ", reset, "Testing invalid bounds (a > b)..."]);
    f = @(x) x.^2;
    a = 1;
    b = 0;
    n = 100;
    I = itg.integrate(f, a, b, n);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0004: Test integration with invalid number of subintervals (n = 0)
try
    disp([bright_yellow, "Test 0004: ", reset, "Testing invalid number of subintervals (n = 0)..."]);
    f = @(x) x.^2;
    a = 0;
    b = 1;
    n = 0;
    I = itg.integrate(f, a, b, n);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0005: Test integration with large number of subintervals
try
    disp([bright_yellow, "Test 0005: ", reset, "Testing integration with large number of subintervals..."]);
    f = @(x) x.^2;
    a = 0;
    b = 1;
    n = 10000;
    I = itg.integrate(f, a, b, n);
    disp([green, "SUCCESS", reset]);
    %disp(["Approximated Integral: ", num2str(I)]);
catch ME
    disp([red, "ERROR", reset]);
    %disp("Error: ");
    %disp(ME.message);
end
% Test 0006: Test setting an unknown property
try
    disp([bright_yellow, "Test 0006: ", reset, "Testing unknown property 'invalid_prop'..."]);
    itg.set("invalid_prop", 42);
    disp([red, "ERROR", reset]);
catch ME
    disp([green, "SUCCESS", reset]);
    %disp("Error: ");
    %isp(ME.message);
end
% Test 0007: Test integration with graph
try
    disp([bright_yellow, "Test 0007: ", reset, "Testing integration with graph..."]);
    f = @(x) x.^2;
    a = 0;
    b = 1;
    n = 100;
    I = itg.integrate(f, a, b, n);
    disp([green, "SUCCESS", reset]);
    %disp(["Approximated Integral: ", num2str(I)]);
catch ME
    disp([red, "ERROR", reset]);
    %disp("Error: ");
    %disp(ME.message);
end

disp([bright_magenta, ""])
disp("------------------------------------------------")
disp(" FFFFF   U   U   N   N   CCCC      0000    333  ")
disp(" F       U   U   NN  N   C        0    0      3 ")
disp(" FFFF    U   U   N N N   C        0    0   333  ")
disp(" F       U   U   N  NN   C        0    0      3 ")
disp(" F        UUU    N   N   CCCC      000     333  ")
disp("------------------------------------------------")
disp(["", reset])



disp([bright_magenta, ""])
disp("------------------------------------------------")
disp(" FFFFF   U   U   N   N   CCCC      0000    4  4 ")
disp(" F       U   U   NN  N   C        0    0   4  4 ")
disp(" FFFF    U   U   N N N   C        0    0   4444 ")
disp(" F       U   U   N  NN   C        0    0      4 ")
disp(" F        UUU    N   N   CCCC      000        4 ")
disp("------------------------------------------------")
disp(["", reset])


