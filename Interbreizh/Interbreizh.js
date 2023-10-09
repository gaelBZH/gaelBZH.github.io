function Select(item)
{
    if(item.style.color=='black')
    {
        item.style.color='white';
        item.style.backgroundColor=getComputedStyle(item).getPropertyValue('--bleuinterbreizh')
    }
    else{
        item.style.color='black';
        item.style.backgroundColor='#f8f8f8'
    }
}

function StopPub()
{
    document.getElementById('pub').style.display='none'
}

function changerCouleurOnglet(couleur) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', couleur);
}

// Stop Pub
document.getElementById('close').addEventListener('click', StopPub);

// Année
document.getElementById("year").innerHTML=(new Date().getFullYear());

// Barre de Recherche
document.getElementById('BarreDeRecherche').addEventListener('input', () => {document.querySelectorAll('.Article').forEach(article => {article.style.display = normalizeSearchTerms(document.getElementById('BarreDeRecherche').value).filter(term => normalizeText(article.querySelector('h3').textContent).includes(term)).length * 2 >= normalizeSearchTerms(document.getElementById('BarreDeRecherche').value).length ? 'block' : 'none';});});

// Couleur Onglet
var style = getComputedStyle(document.body)
console.log( style.getPropertyValue('--bleuinterbreizh') )
changerCouleurOnglet(style.getPropertyValue('--bleuinterbreizh'));


const normalizeText = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const normalizeSearchTerms = terms => terms.toLowerCase().split(/\s+/).map(normalizeText);

