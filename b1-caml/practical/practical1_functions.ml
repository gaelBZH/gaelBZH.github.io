(* Scope *)

let a = 1 ;;
let f x = x + a ;;
f 4 ;;
let a = 5 ;;
f 4 ;; (* try to explain the result *)

let succ x = x - 1 ;;
let square x = x * x ;;
let square_of_succ x = square(succ x) ;;
square_of_succ 2 ;;
let succ x = x + 1 ;;
square_of_succ 2 ;;
succ 2 ;;
