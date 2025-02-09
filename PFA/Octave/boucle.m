N = 10;

f = zeros(1, N);

f(1) = 0;
f(2) = 1;

for i = 3:N
   f(i) = f(i-1) + f(i-2);
endfor

f
