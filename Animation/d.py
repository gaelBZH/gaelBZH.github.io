def xor(x,y):
    return (bool((x and not y) or (not x and y)))

if 1==1:
    bateau = {"Porte-Avion":5, "Croiseur":4, "Destroyer A":3, "Destroyer B":3, "Corvette":2}
    Lettres=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "a", "b", 'c', "d", "e", "f", "g", "h", "i", "j"]
    for bat in bateau :
        while True:
            o = input("Placer votre {} de longeur {} en inscrivant les coordonnées de la manière suivante : LC LC | Ou bien taper random pour les placer automatiquement ".format(bat, bateau[bat]))
            if o=="random":
                break
            elif (len(o)==5 or len(o)==4) and (o[0] in Lettres) and (o[(len(o)-2)] in Lettres): # Vérifier Lettres
                if o[1].isnumeric():
                    if (int(o[1])>0) and (int(o[1])<=10): # Vérifier le premier nombre
                        if o[len(o)-1].isnumeric():
                            if (int(o[(len(o)-1)])>0) and (int(o[(len(o)-1)])<=10): # Vérifier deuxième nombre
                                    if xor((o[0]==o[len(o)-2]), (o[1]==o[len(o)-1])): # Vérifier même ligne ou même colonne
                                        if xor(o[0]==o[len(o)-2])==True:
                                            com="Lettre"
                                        elif (o[1]==o[len(o)-1])==True:
                                            com="Chiffre"
                                        else:
                                            print("Erreur")
                                            
            else:
                print("invalide")
        print(o)
