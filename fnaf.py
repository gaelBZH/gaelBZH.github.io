from turtle import *

color('blue')
shape('turtle')
speed(10)
def koch(n,L):
    """jolie fonction"""
    if n==0:
        forward(L)
    else:
        koch(n-1,L//3)
        left(120)
        koch(n-1,L//3)
        right(120)
        koch(n-1,L//3)
        left(120)
        koch(n-1,L//3)
    
    

koch(3,300)

# Pour pouvoir fermer proprement la fenêtre !
done()
#bye()
