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
document.getElementById("year").innerHTML=(new Date().getFullYear());