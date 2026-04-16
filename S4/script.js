const msPerDay = 1000 * 60 * 60 * 24;
const clamp = (val) => Math.min(Math.max(val, 0), 100);

        function getProgressData()
        {
            const today = new Date(); 
            
            const date1 = new Date('2026-02-20T07:00:00');
            const date2 = new Date('2026-06-13T12:30:00');

            console.log("Jour actuel :", today.getDate(), "/", today.getMonth() + 1, "/", today.getFullYear());          
            console.log("Heure actuelle :", today.getHours(), ":", today.getMinutes(),":", today.getSeconds());

            const totalMs = date2 - date1;
            const doneMs = today - date1;
            
            const pourcent = clamp((doneMs / totalMs) * 100);

            const totalJours = Math.round(totalMs / msPerDay);
            const doneJours = Math.round(doneMs / msPerDay);
            const restJours = Math.round((date2 - today) / msPerDay);

            console.log(`Jours passés : ${Math.min(totalJours, doneJours)} / ${totalJours}`);
            console.log(`Jours restants : ${Math.max(0, restJours)}`);
            console.log(`Progression (exacte)   : ${pourcent}%`);
            console.log("Progression (arrondie) :", Math.round(pourcent) + "%")

            return pourcent;
        }

        function updateUI()
        {
            pourcent = getProgressData();
            const barre = document.getElementById("barre-interne");

            barre.style.width = pourcent.toFixed(2) + "%";
            barre.textContent = Math.round(pourcent) + "%";
            
            let couleur = "black";
            if      (pourcent >= 100) couleur = "#3b31c7";
            else if (pourcent >= 97)  couleur = "#00562b";
            else if (pourcent >= 95)  couleur = "#008040"
            else if (pourcent >= 92)  couleur = "#00a300";
            else if (pourcent >= 90)  couleur = "green";
            else if (pourcent >= 86)  couleur = "#54db54";
            else if (pourcent >= 82)  couleur = "#8EF571"
            else if (pourcent >= 75)  couleur = "#BEF571"
            else if (pourcent >= 68)  couleur = "#ccf571";
            else if (pourcent >= 62)  couleur = "#D8F571"
            else if (pourcent >= 56)  couleur = "#EAF571"
            else if (pourcent >= 53)  couleur = "#f5f571";
            else if (pourcent >= 50)  couleur = "yellow";
            else if (pourcent >= 42)  couleur = "#FFD700"
            else if (pourcent >= 38)  couleur = "#ffbf00";
            else if (pourcent >= 35)  couleur = "orange";
            else if (pourcent >= 30)  couleur = "#ff8132";
            else if (pourcent >= 25)  couleur = "#FF6347"
            else if (pourcent >= 20)  couleur = "#ff5331";
            else if (pourcent >= 15)  couleur = "orangered";
            else if (pourcent >= 10)  couleur = "red";
            else if (pourcent >= 7)   couleur = "#B22222"
            else if (pourcent >= 5)   couleur = "darkred";
            else if (pourcent >= 2)   couleur = "#4B0000"

            barre.style.backgroundColor = couleur;
        }

        // Lancement
        updateUI();
