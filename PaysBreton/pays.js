var ModeStricte = false;

// Mettre à jour les classes des lignes visibles
function CSS(){
    var visibleRows = document.querySelectorAll('.BDD tr:not([style*="display: none;"])');
    visibleRows.forEach(function (row, index) {
        row.classList.remove('even', 'odd');
        row.classList.add(index % 2 === 0 ? 'even' : 'odd');
    });
}

// Vérifie si une des catégories n'a aucun élement sélectionné. Renvoie true ou false.
function checkCategories(stricte) {
    var departChecked = document.querySelectorAll('input[name="department"]:checked').length > 0;
    var paysChecked = document.querySelectorAll('input[name="pays"]:checked').length > 0;
    var paysTradChecked = document.querySelectorAll('input[name="paysTrad"]:checked').length > 0;
    if (stricte)
    {
        return !departChecked || !paysChecked || !paysTradChecked;
        // Si au moins une catégorie n'a aucun élément coché, retourne true.
    }
    
    else{
        // Si toutes les catégories n'ont aucun élément coché, retourne true.
        return !departChecked && !paysChecked && !paysTradChecked;
    }
}

// Filtre la table selon les critères. Retourne le nombre de lignes visibles de la table.
function FiltrerTable() {
    var checkboxesDepartement = document.getElementsByName('department');
    var selectedDepartments = Array.from(checkboxesDepartement)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    var checkboxesPays = document.getElementsByName('pays');
    var selectedPays = Array.from(checkboxesPays)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    var checkboxesPaysTrad = document.getElementsByName('paysTrad');
    var selectedPaysTrad = Array.from(checkboxesPaysTrad)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    var table = document.querySelector('#BDD table');

    // Vérifier si la table existe
    if (table) {
        var rows = table.getElementsByTagName('tr');

        if (checkCategories(ModeStricte))
        {
            for (var i = 1; i < rows.length; i++)
            {rows[i].style.display = 'none';}
            results(document.querySelector('#results'), 0);
            return -1;
        }

        // Ajout de la logique de recherche
        var RechercherCommuneValue = document.getElementById('RechercherCommune').value.toLowerCase();

        let LignesVisibles = 0;
        let L = [];

        // Parcourir les lignes si des lignes existent
        for (var i = 1; i < rows.length; i++) {
            var departmentCell = rows[i].getElementsByTagName('td')[3];
            var paysCell = rows[i].getElementsByTagName('td')[5];
            var paysTradCell = rows[i].getElementsByTagName('td')[6];
            var communeCell = rows[i].getElementsByTagName('td')[0];
            var nomBretonCell = rows[i].getElementsByTagName('td')[1];
            var codeCommuneCell = rows[i].getElementsByTagName('td')[2];

            // Vérifier si les cellules existent avant d'accéder à leurs propriétés
            if (departmentCell && paysCell && paysTradCell && communeCell && nomBretonCell && codeCommuneCell) {
                var departmentValue = departmentCell.textContent || departmentCell.innerText;
                var paysValue = paysCell.textContent || paysCell.innerText;
                var paysTradValue = paysTradCell.textContent || paysTradCell.innerText;
                var communeValue = communeCell.textContent || communeCell.innerText;
                var nomBretonValue = nomBretonCell.textContent || nomBretonCell.innerText;
                var codeCommuneValue = codeCommuneCell.textContent || codeCommuneCell.innerText;

                // Filtrer en fonction des critères sélectionnés
                var shouldDisplaySearch =
                    communeValue.toLowerCase().includes(RechercherCommuneValue) ||
                    nomBretonValue.toLowerCase().includes(RechercherCommuneValue) ||
                    (codeCommuneValue.length === 5 && codeCommuneValue.includes(RechercherCommuneValue));

                var shouldDisplay =
                    shouldDisplaySearch &&
                    (selectedDepartments.length === 0 || selectedDepartments.includes(departmentValue)) &&
                    (selectedPays.length === 0 || selectedPays.includes(paysValue)) &&
                    (selectedPaysTrad.length === 0 || selectedPaysTrad.includes(paysTradValue));

                // Afficher ou masquer la ligne en fonction du résultat du filtre
                rows[i].style.display = shouldDisplay ? '' : 'none';
                if (shouldDisplay)
                {
                    LignesVisibles++;
                }
                else{
                    L.push(Array.from(table.rows[i].cells).map(cell => cell.textContent));
                }
            }
        }

        // Appel des fonctions results et CSS
        results(document.querySelector('#results'), LignesVisibles);
        CSS();
        return L;
    }
}

// Affiche le nombre de résultats de la table dans item.
function results(item, nb) {
    document.querySelector("#FakeTable").style.display='none'
    if (nb > 1) {
        item.innerHTML = '(' + nb + ' résultats).';
    }
    else if (nb === 1) {
        item.innerHTML = '(1 résultat).';
    }
    else {
        document.querySelector("#FakeTable").style.display = 'block';
        item.innerHTML = '';
    }
}

// Sélectionne ou Déselectionne (check true ou false) toutes les cases de la n-ième catégorie.
function CocherDecocher(n, check) {

    if (n===1){var checkboxes = document.querySelectorAll('.inputDepart');}
    else if(n===2){var checkboxes = document.querySelectorAll('.inputPays');}
    else{var checkboxes = document.querySelectorAll('.inputPaysTrad');}
    
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = check;
    });
    FiltrerTable();
}



// Écouteur d'Évènement - Pop Up Filtre Table
document.addEventListener('click', function(event) {
  if (!document.getElementById('advance').contains(event.target)) // Vérifier si le clic n'est pas à l'intérieur du details
  {document.getElementById('advance').removeAttribute('open');}
});

// Écouteurs d'Évènement - Filtre Table
document.addEventListener('DOMContentLoaded', function() {

    // Recherche Textuelle
    document.getElementById('RechercherCommune').addEventListener('input', FiltrerTable);

    // Recherche Pays Traditionnel
    document.querySelectorAll('.inputPaysTrad[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', FiltrerTable);
    });

    // Recherche Pays Breton
    document.querySelectorAll('.inputPays[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', FiltrerTable);
    });

    // Recherche Département
    document.querySelectorAll('.inputDepart[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', FiltrerTable);
    });
});

// Écouteur d'Évènement - Close Filtre
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("advance").open = false;
});

// Écouteur d'Évènement - Mode Stricte
document.getElementById('strictButton').addEventListener('change', function() {
    ModeStricte = document.getElementById('strictButton').checked;
    FiltrerTable()
});

// Afficher Nombre de Résultats dans le Tableau par défaut
results(document.querySelector('#results'), document.querySelector('#BDD table').rows.length-1);

// Changer Année
document.getElementById("year").innerHTML=(new Date().getFullYear());

console.log("HEY !\n\
Demat jeune développeur !\n\
Je vois que tu accèdes au Code du site de l'Empire Breton !\n\
Saches que tu peux tout à fait utiliser des éléments de ce site à ton goût pour ton propre projet, à condition de ne pas recopier à la lettre pour recrééer exactement le même site.\n\
Si tu veux me contacter viens sur le Discord de l'Empire Breton ou contacte moi sur Discord @gaelbzh ou sur Twitter @gaelBZH29 !\n\
Même pour me dire qu'au moins une personne aura lu ce Message xD.\n\
---------------------------------------------")