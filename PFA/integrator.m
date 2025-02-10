classdef integrator < handle
  properties (Access = protected)




    % A character string. Can be 'left', 'right', 'middle', 'trapezes', 'gauss2'
    % or 'gauss3'
    method;
    xk; % the interpolation points, scaled to the interval [0,1]
    wk; % The weight of each interpolation point, to approximate the integral on [0,1]
    % The integral on a small interval [ai,bi] of width di=bi-ai is approximated by
    % di * ( wk(1)*f(ai + xk(1)*di) + wk(2) * f(ai+xk(2)*di + ... )

    dx; % When computing primitive(f,from,x), the interval [0,x] is split in n
        % subintervals, n such that (x-from)/n ~= dx.
        % More precisely, n = round( (x-from)/dx ) (or n=1 if the latter formula
        % evaluates to 0).
  endproperties


  methods (Access = public)
    % Constructor. The arguments can be:
    % - An integrator. In this case, varargin has length 1, it is varargin{1}
    % - Options about the properties method and dx. You call it with pairs :
    %     integrator("method",value,"dx",value)
    %   Default value of method is "trapezes"
    %   Default value of dx is 0.1



    % CONSTRUCTEUR
    function obj = integrator (varargin)

      obj.method = "trapezes";
      obj.dx = 0.1;
      n = nargin;
      b = mod(n,2);
      if b == 1
        if (nargin == 1)
          if (isa(varargin{1}, "integrator"))
              obj.method = varargin{1}.method;
              obj.dx = varargin{1}.dx;
          else
              error ("is not an integrator");
          endif
        else
            error ("odd number of args");
        endif
      else
         n = nargin;
         i = 2;
         obj.method = varargin{i};

          while (i <= n)
           if (strcmp(varargin{i-1}, "method"))
                obj.method = varargin{i};
            elseif (strcmp(varargin{i-1}, "dx"))
                obj.dx = varargin{i}
           endif
              i = i + 2;
         endwhile
         obj.set("method", obj.method, "dx", obj.dx);
      endif
    endfunction







    % GETTER

    % Return the property value. Argument prop can be "method" or "dx".
    % The function is already coded, you don't need to change it.
    function retval = get (this, prop)
      switch (prop)
        case "method"
          retval = this.method;
        case "dx"
          retval = this.dx;
      endswitch
    endfunction




    % SETTER

    % Set the required properties to the required values. Arguments are a list
    % of pairs property,value
    % The properties can be "method" or "dx". You can call the method with, for
    % example (assuming that itg is an integrator):
    %   itg.set("method","left","dx",0.1)
    %   or itg.set("method","left")
    %   or itg.set("dx",0.1)
    % If varargin is empty, nothing is done.
    function this = set (this, varargin)
      n = nargin;
      i = 2;
      while (i <= n)
        if (strcmp(varargin{i-1}, "method"))
            this.method = varargin{i};
            %if (this.method == "left")
            %elseif (this.method == "right")
            %elseif (this.method == "middle")
            %elseif (this.method == "trapezes")
            %elseif (this.method == "gauss2")
            %elseif (this.method == "gauss3")
            %endif
        elseif (strcmp(varargin{i-1}, "dx"))
            this.dx = varargin{i};
        endif
          i = i + 2;
      endwhile
    endfunction







    % This function displays the integrator properties.
    % No need to change it.
    function disp(this)
      printf("method: %s\n", this.method);
      printf("dx = %.2e\n", this.dx);
    endfunction






    % This function compute the integral of f between a and b, using the
    % quadrature formula specified by the property method.
    % Arguments are:
    % - f : a function handle, for example @sin or @(x) x.^2
    % - a and b : two scalar numerical values, the bounds of integrations
    % - n : a scalar numerical value (integer value). When doing the integration,
    %   the interval [a,b] is split in n subintervals [ai,bi] of equal width
    %   bi-ai = (b-a)/n
    % - hax is an optional argument. If it is set, it is a graph handle. Use it
    %   to draw an explanaory graphic of the integration method (graph of the
    %   function to integrate, graph of the appromating polynomial on each interval
    %   [ai,bi], etc
    % The function returns the integral approximation value (a scalar numerical).
    function I = integrate(this,f,a,b,n,hax)
      I = 0;



      if (method == "left")
        largeur = b - a;
        hauteur = f(a);
        aire = largeur * hauteur;
        I = aire;


      elseif (method == "right")
        largeur = b - a;
        hauteur = f(b);
        aire = largeur * hauteur;
        I = aire;


      elseif (method == "middle")
        largeur = b - a;
        hauteur = (f(a) + f(b))/2;
        aire = largeur * hauteur;
        I = aire;


      elseif (method == "trapezes")
          coefa = (f(b) - f(a)) / (b-a);
          coefb = f(a) - coefa * a;
          largeur = b - a;

          hMax = max([f(a) f(b)]);
          hMin = min([f(a) f(b)]);

          aireRec = hmin * largeur;
          aireTri = ((hMax - hMin) * largeur) / 2;

          aire = aireRec + aireTri;
          I = aire;
      endif
      endfunction

    % Computes the values of a primitive of f: the integral of f between from,
    % and x.
    % Arguments are:
    % - f : a function handle, for example @sin or @(x) x.^2
    % - from : a scalar numerical value (the bound below in the integration)
    % - x : the values at which the primitive function is evaluated. It can be
    %   a scalar value or a matrix.
    % The returned value y is a matrix of same size as x
    %
    % Note:
    % The function needs to execute a for loop, if argument x has more than 1
    % element. For each x(i,j), compute y(i,j) using the function integrate.
    % The number of subintervals of [from,x(i,j)] (argument n in the integrate
    % function) depends on the length x(i,j)-from and on this.dx. Take
    %   n = round( (x(i,j)-from) / this.dx ) (and set it to 1 if the latter
    % formula results in 0).
    function y = primitive (this, f, from, x)
      y = zeros(size(x)); % Erase this line and write your code
    endfunction


    % This function studies the integration error, and returns a model of the
    % form |Error| = C / n^alpha.
    % when the interval [a,b] is split in n subintervals [ai,bi]
    %
    % Arguments
    % - f: a function handle
    % - a and b: two scalar numerical values, the integration bounds
    % - Ith: theoretical value of the integral. A scalar numerical value.
    % - ns: the values of n that we test. A vector of numerical (with integrer
    %   values). At each value n of ns, call the function integrate and compare
    %   its output with Ith.
    % - hax: an optional argument. If it is given it is a axe handle where you
    %   can do a graphical representation of the error pattern.
    %
    % Output is a 2-element vector [C,alpha] such that the error model
    % is C / n^alpha.
    function retval = integration_error (this, f, a, b, Ith, ns, hax)
      retval = [0,0]; % Erase this line and write your code
    endfunction
  endmethods
endclassdef

