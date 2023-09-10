def TextToMorse(text, Dict):
    trans=[]
    Conv=Dict
    Conv.update({
        " ": "  ",
        ".": " /",
        "!": " /",
        "?": " /",
        ",": " /",
        ";": " /",
        ":": " /"
        })

    # On créée la liste des codes morse
    for i in text:
        try:
            trans.append(Conv[i])
        except KeyError:
            trans.append("$")
    
    # Convertir Liste en Texte
    reponse=""
    for i in trans:
        reponse=reponse+i+" "

    return reponse
def MorseToText(morse, Dict):
    trans=[]
    Conv = {value:key for key, value in Dict.items()}
    Conv.update({
        "/": ". ",
        "": " ",
        })

    # On créée la liste des lettres
    for i in morse.split(" "):
        try:
            trans.append(Conv[i])
        except KeyError:
            trans.append("$")
    
    # Convertir Liste en Texte
    reponse=""
    for i in trans:
        reponse=reponse+i

    return reponse

Base={
    "a": "._",
    "b": "_...",
    "c": "_._.",
    "d": "_..",
    "e": ".",
    "f": ".._.",
    "g": "__.",
    "h": "....",
    "i": "..",
    "j": ".___",
    "k": "_._",
    "l": "._..",
    "m": "__",
    "n": "_.",
    "o": "___",
    "p": ".__.",
    "q": "__._",
    "r": "._.",
    "s": "...",
    "t": "_",
    "u": ".._",
    "v": "..._",
    "w": ".__",
    "x": "_.._",
    "y": "_.__",
    "z": "__..",
    "A": "._",
    "B": "_...",
    "C": "_._.",
    "D": "_..",
    "E": ".",
    "F": ".._.",
    "G": "__.",
    "H": "....",
    "I": "..",
    "J": ".___",
    "K": "_._",
    "L": "._..",
    "M": "__",
    "N": "_.",
    "O": "___",
    "P": ".__.",
    "Q": "__._",
    "R": "._.",
    "S": "...",
    "T": "_",
    "U": ".._",
    "V": "..._",
    "W": ".__",
    "X": "_.._",
    "Y": "_.__",
    "Z": "__..",
    "1": ".____",
    "2": "..___",
    "3": "...__",
    "4": "...._",
    "5": ".....",
    "6": "_...",
    "7": "__...",
    "8": "___..",
    "9": "____.",
    }
print(TextToMorse(input(""), Base))
print(MorseToText(input(""), Base))