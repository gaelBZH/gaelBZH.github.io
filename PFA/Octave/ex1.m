x = linspace(0, 2*pi, 1000);

tic
y1 = [];
for i=1:1000
  y1 = [y1 sin(i)];
endfor
toc

tic
y2 = zeros(1000);
for i=1:1000
  y2(i) = sin(i);
endfor
toc

tic
y3 = sin(x);
toc

