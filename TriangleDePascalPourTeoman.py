from turtle import *
color("red")
from random import randint
shape('turtle')
width(10)
Couleurs=["blue","red", "green"]

for i in range(3):
    for i in range(270):
        forward(270//270)
        color(Couleurs[randint(0,len(Couleurs)-1)])
    left(120)
up()
goto(110,110)
color(Couleurs[randint(0,len(Couleurs)-1)])
write("Pascal ")
hideturtle()
done()
