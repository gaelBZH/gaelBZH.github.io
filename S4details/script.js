const msPerDay = 1000 * 60 * 60 * 24;
const clamp = (val) => Math.min(Math.max(val, 0), 100);

        function getProgressData()
        {
            const footer = document.querySelector("#ftxt");
            const today = new Date(); 
            
            const date1 = new Date('2026-02-20T07:00:00');
            const date2 = new Date('2026-06-13T12:30:00');
            const date1bis = new Date('2026-05-04T20:35:00');
            const date1ter = new Date('2026-05-31T00:00:00');

            // On prépare les chaînes pour la date et l'heure
            const strDate = `Jour actuel : ${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
            const strHeure = `Heure actuelle : ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;

            console.log(strDate);          
            console.log(strHeure);

            const totalMs = date2 - date1;
            const doneMs = today - date1;
            
            const totalMsBis = date2 - date1bis;
            const doneMsBis = today - date1bis;

            const totalMsTer = date2 - date1ter;
            const doneMsTer = today - date1ter;
            
            const pourcent = clamp((doneMs / totalMs) * 100);
            const pourcentBis = clamp((doneMsBis / totalMsBis) * 100);
            const pourcentTer = clamp((doneMsTer / totalMsTer) * 100);

            const totalJours = Math.round(totalMs / msPerDay);
            const doneJours = Math.round(doneMs / msPerDay);
            const restJours = Math.round((date2 - today) / msPerDay);

            const strPasses = `Jours passés : ${Math.min(totalJours, doneJours)} / ${totalJours}`;
            const strRestants = `Jours restants : ${Math.max(0, restJours)}`;
            const strProgExacte = `Progression (exacte)   : ${pourcent}%`;
            const strProgArrondie = `Progression (arrondie) : ${Math.round(pourcent)}%`;

            console.log(strPasses);
            console.log(strRestants);
            console.log(strProgExacte);
            console.log(strProgArrondie);

            if (footer) {
                footer.innerHTML = `
                    ${strDate}<br>
                    ${strHeure}<br>
                    ${strPasses}<br>
                    ${strRestants}<br>
                    ${strProgExacte}<br>
                    ${strProgArrondie}
                `;
            }

            return { pourcent, pourcentBis, pourcentTer };
        }

        function updateUI()
        {
            const { pourcent, pourcentBis, pourcentTer } = getProgressData();
            const barres = [
                { id: "barre-interne", val: pourcent },
                { id: "barre-interne-bis", val: pourcentBis },
                { id: "barre-interne-ter", val: pourcentTer }
            ];

            barres.forEach(item => {
                const barre = document.getElementById(item.id);
                if (!barre) return;
                
                barre.style.width = item.val.toFixed(2) + "%";
                barre.textContent = Math.round(item.val*100)/100 + "%";
                
                let couleur = "black";
                if      (item.val >= 100) couleur = "#3b31c7";
                else if (item.val >= 97)  couleur = "#00562b";
                else if (item.val >= 95)  couleur = "#008040"
                else if (item.val >= 92)  couleur = "#00a300";
                else if (item.val >= 90)  couleur = "#008000"; // green
                else if (item.val >= 86)  couleur = "#54db54";
                else if (item.val >= 82)  couleur = "#8EF571"
                else if (item.val >= 75)  couleur = "#BEF571"
                else if (item.val >= 68)  couleur = "#ccf571";
                else if (item.val >= 62)  couleur = "#D8F571"
                else if (item.val >= 56)  couleur = "#EAF571"
                else if (item.val >= 53)  couleur = "#f5f571";
                else if (item.val >= 50)  couleur = "#ffff00"; // yellow
                else if (item.val >= 42)  couleur = "#FFD700"
                else if (item.val >= 38)  couleur = "#ffbf00";
                else if (item.val >= 35)  couleur = "#ffa500"; // orange
                else if (item.val >= 30)  couleur = "#ff8132";
                else if (item.val >= 25)  couleur = "#FF6347"
                else if (item.val >= 20)  couleur = "#ff5331";
                else if (item.val >= 15)  couleur = "#ff4500"; // orangered
                else if (item.val >= 10)  couleur = "#ff0000"; // red
                else if (item.val >= 7)   couleur = "#B22222"
                else if (item.val >= 5)   couleur = "#8b0000"; // darkred
                else if (item.val >= 2)   couleur = "#4B0000"
                barre.style.backgroundColor = couleur;
            });
        }

        // Lancement
        updateUI();