from os import name
from os import system
from random import randint
from time import sleep
system('cls' if name == 'nt' else 'clear')

print("COUPE DU MONDE ⚽️🏆")
print("Tirage au sort")

PotA=["Bretagne", "Finlande", "Union Soviétique", "Ukraine"]
PotB=["Irlande", "France", "Émirats Arabes Unis", "Japon"]
# Les Pots sont classés selon la force des serveurs nations

PouleA=[]
PouleB=[]
# Poules Initialement Vides

print("-------------------------"), print("POULE A")
sleep(3)
x=randint(0,3)
print("{} tiré au sort pour la Poule A".format(PotA[x]))
PouleA.append(PotA[x])
PotA.pop(x)
# On choisit ALÉATOIREMENT une nation de pot A pour la poule A
sleep(3)

x=randint(0,2)
print("{} tiré au sort pour la Poule A".format(PotA[x]))
PouleA.append(PotA[x])
PotA.pop(x)
# On choisit ALÉATOIREMENT une nation de pot A pour la poule A
sleep(3)

x=randint(0,3)
print("{} tiré au sort pour la Poule A".format(PotB[x]))
PouleA.append(PotB[x])
PotB.pop(x)
# On choisit ALÉATOIREMENT une nation de pot B pour la poule A
sleep(3)

x=randint(0,2)
print("{} tiré au sort pour la Poule A".format(PotB[x]))
PouleA.append(PotB[x])
PotB.pop(x)
# On choisit ALÉATOIREMENT une nation de pot B pour la poule A
sleep(3)

print("-------------------------"), print("POULE B")
sleep(3)

x=randint(0,1)
print("{} tiré au sort pour la Poule B".format(PotA[x]))
PouleB.append(PotA[x])
PotA.pop(x)
# On choisit ALÉATOIREMENT une nation de pot A pour la poule A
sleep(3)

x=randint(0,0)
print("{} tiré au sort pour la Poule B".format(PotA[x]))
PouleB.append(PotA[x])
PotA.pop(x)
# On choisit ALÉATOIREMENT une nation de pot A pour la poule A
sleep(3)

x=randint(0,1)
print("{} tiré au sort pour la Poule B".format(PotB[x]))
PouleB.append(PotB[x])
PotB.pop(x)
# On choisit ALÉATOIREMENT une nation de pot B pour la poule A
sleep(3)

x=randint(0,0)
print("{} tiré au sort pour la Poule B".format(PotB[x]))
PouleB.append(PotB[x])
PotB.pop(x)
# On choisit ALÉATOIREMENT une nation de pot B pour la poule A
sleep(1)

print("-------------------------"), print("POULES")
print("Poule A : {}, {}, {}, {}".format(PouleA[0],PouleA[1],PouleA[2],PouleA[3]))
print("Poule A : {}, {}, {}, {}".format(PouleB[0],PouleB[1],PouleB[2],PouleB[3]))