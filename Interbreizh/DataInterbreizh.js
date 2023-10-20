var Data = [
    ["date", "heure", "auteur"], // 0
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 5
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 10
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["27 août 2022", "21:56", "Breizhdemon"],
    ["30 août 2022", "18:36", "Breizhdemon"], // 15
    ["30 août 2022", "22:10", "Yukilo"],
    ["date", "heure", "auteur"],
    ["4 septembre 2022", "8:27", "Breizhdemon"],
    ["6 septembre 2022", "20:11", "Breizhdemon"],
    ["10 septembre 2022", "10:44", "Breizhdemon"], // 20
    ["24 septembre 2022", "22:30", "Breizhdemon"],
    ["27 septembre 2022", "20:24", "Breizhdemon"],
    ["30 septembre 2022", "10:00", "Breizhdemon"],
    ["12 octobre 2022", "18:34", "gaelBZH"],
    ["15 octobre 2022", "11:06", "Breizhdemon"], // 25
    ["16 octobre 2022", "18:22", "Ghostjoker"],
    ["17 octobre 2022", "9:51", "Breizhdemon"],
    ["28 octobre 2022", "21:36", "Hans Friess"],
    ["31 octobre 2022", "19:49", "gaelBZH"],
    ["3 janvier 2023", "13:04", "Breizhdemon"], // 30
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 35
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 40
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 45
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 50
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 55
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 60
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 65
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"],
    ["date", "heure", "auteur"], // 70
    ["date", "heure", "auteur"],
    ] 

document.querySelector("#date").innerHTML=Data[NumeroPage][0];
document.querySelectorAll(".DateAuthor time")[1].innerHTML=Data[NumeroPage][1];
document.querySelector("#authorname").innerHTML=Data[NumeroPage][2];