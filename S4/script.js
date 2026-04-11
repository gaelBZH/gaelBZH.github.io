        function getProgressData()
        {
            const today = new Date();
            const dayprogress = getDayProgress();
            const debutAnnee = new Date(today.getFullYear(), 0, 0);
            const difference = today - debutAnnee;
            const jourDeLAnnee = Math.floor(difference / (1000 * 60 * 60 * 24));
            const current = jourDeLAnnee - 50; 

            const date1 = new Date('2026-02-20');
            const date2 = new Date('2026-06-13');
            const total = (date2 - date1) / (1000 * 60 * 60 * 24);
            const done = Math.round((today - date1) / (1000 * 60 * 60 * 24));
            const rest = Math.round((date2 - today) / (1000 * 60 * 60 * 24));
            console.log("Nombre de jours passés à Cracovie : ", Math.min(total, done), "/", total);
            console.log("Nombre de jours restants :", Math.max(0, rest));

            const pourcent =Math.min(Math.max(((current+dayprogress) / total) * 100, 0), 100); // Entre 0 et 100
            console.log("Progress semester without hours :", Math.min(Math.max((current / total) * 100, 0), 100));
            console.log("Progress semester with hours :", pourcent);
            return { current, total, pourcent };
        }

        function getDayProgress()
        {
            const maintenant = new Date();
            let seconds = maintenant.getHours() * 3600 + maintenant.getMinutes()*60+maintenant.getSeconds();
            let progress = seconds / (60 * 60 * 24);
            console.log("Jour actuel :", maintenant.getDate(), "/", maintenant.getMonth() + 1, "/", maintenant.getFullYear());          
            console.log("Heure actuelle :", maintenant.getHours(), ":", maintenant.getMinutes(),":", maintenant.getSeconds());
            console.log("Progression de la journée actuelle : ", 100*progress, "%");
            return progress;
        }

        function updateUI()
        {
            const data = getProgressData();
            const barre = document.getElementById("barre-interne");

            barre.style.width = data.pourcent.toFixed(2) + "%";
            barre.textContent = Math.round(data.pourcent) + "%";
            
            let couleur = "black";

            console.log("data.pourcent =", data.pourcent)
            console.log("Arrondi :", Math.round(data.pourcent) + "%")
            if (data.pourcent >= 100) couleur = "blue";
            else if (data.pourcent >= 95) couleur = "#008040";
            else if (data.pourcent >= 90) couleur = "green";
            else if (data.pourcent >= 82) couleur = "#8EF571";
            else if (data.pourcent >= 75) couleur = "#BEF571";
            else if (data.pourcent >= 62) couleur = "#D8F571";
            else if (data.pourcent >= 56) couleur = "#EAF571";
            else if (data.pourcent >= 50) couleur = "yellow";
            else if (data.pourcent >= 42) couleur = "#FFD700";
            else if (data.pourcent >= 35) couleur = "orange";
            else if (data.pourcent >= 25) couleur = "#FF6347";
            else if (data.pourcent >= 15) couleur = "orangered";
            else if (data.pourcent >= 10) couleur = "red";
            else if (data.pourcent >= 7)  couleur = "#B22222";
            else if (data.pourcent >= 5)  couleur = "darkred";
            else if (data.pourcent >= 2)  couleur = "#4B0000";
            else couleur = "black";
            barre.style.backgroundColor = couleur;
        }

        // Lancement
        updateUI();
