let min3 a b c = if (a < b && a < c) then a else
  if (b < a && b < c) then b else c;;

let highest_square_sum a b c = 
  if min3 a b c = a
  then b*b+c*c else
  if min3 a b c = b then a*a+c*c else
    b*b+c*c;;

let isCarreParfait n = 
  let racinen = sqrt (float_of_int n) in
    racinen = float_of_int (int_of_float racinen);;

let isCarreParfait n =
  let float_n = float_of_int n in
  let sqrt_n = sqrt float_n in
  let int_sqrt = int_of_float sqrt_n in
  let float_int_sqrt = float_of_int int_sqrt in
    sqrt_n = float_int_sqrt;;

let isSumSquareCorrect n =
  let a = n / 100 and b = n mod 100 / 10 and c = n mod 10 in 
  let m = highest_square_sum a b c in
    isCarreParfait m;;


let mystery n =
  if n < 100 || n > 999 then invalid_arg "n doit avoir 3 chiffres." else
    isCarreParfait n && isSumSquareCorrect n;;


(*mystery 99;; erreur*)
mystery 100;;
mystery 101;;
mystery 102;;
mystery 103;;
mystery 104;;
mystery 121;;
mystery 123;;
mystery 256;;
mystery 441;;
mystery 676;;
mystery 961;;
