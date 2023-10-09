function DarkMode()
{
    let blanc = '#e5e5e5';
    let noir = '#202121';
    document.querySelector(':root').style.setProperty('--bleuinterbreizh', '#04162d');
    document.querySelector(':root').style.setProperty('--bleuinterbreizhclair', '#0e233d');
    document.querySelector(':root').style.setProperty('--texte', blanc);
    document.querySelector(':root').style.setProperty('--highlightedtexte', blanc);
    document.body.style.backgroundColor = noir;
    document.querySelector("#Sujets").style.color=blanc;
}
function changerCouleurOnglet(couleur) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', couleur);
}

changerCouleurOnglet(getComputedStyle(document.documentElement).getPropertyValue('--bleuinterbreizh').trim());
document.getElementById("year").innerHTML=(new Date().getFullYear());