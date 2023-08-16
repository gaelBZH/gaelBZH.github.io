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

document.getElementById('close').addEventListener('click', StopPub); // Stop Pub
document.getElementById("year").innerHTML=(new Date().getFullYear()); // Année

// Barre de Recherche
const articles = document.querySelectorAll('.Article');

document.getElementById('BarreDeRecherche').addEventListener('input', () => {
    const searchTerms = normalizeSearchTerms(document.getElementById('BarreDeRecherche').value);

    articles.forEach(article => {
        const title = normalizeText(article.querySelector('h3').textContent);
        const matchingTerms = searchTerms.filter(term => title.includes(term));
        article.style.display = matchingTerms.length * 2 >= searchTerms.length ? 'block' : 'none';
    });
});

const normalizeText = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const normalizeSearchTerms = terms => terms.toLowerCase().split(/\s+/).map(normalizeText);

