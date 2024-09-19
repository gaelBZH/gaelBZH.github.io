(* Examples of exceptions *)

let s = "Hello Word!" in s.[15] ;;

let f x y = x / y ;;
f 5 0 ;;

(* Two functions to raise exceptions *)

failwith ;; (* raises the exception "Failure" *)

let f x y =
  if y = 0 then
    failwith "f: division by zero"
  else
    x / y ;;

f 5 0 ;;

invalid_arg ;; (* raise the exception "Invalid_argument" *)

let g s i =
  if i >= String.length s then
    invalid_arg "i is out of bound"
  else
    s.[i] ;;
g "Hello Wordl!" 15 ;;

let mirror n = (n mod 10) * 10 + n / 10 ;;
mirror 42 ;;
mirror 13245 ;;

let mirror n =
  if n < 10 || n >= 100 then
    invalid_arg "n is not a 2-digit number"
  else
    (n mod 10) * 10 + n / 10 ;;
mirror 12345 ;;
