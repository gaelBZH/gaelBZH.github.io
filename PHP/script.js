// Année
document.getElementById("year").innerHTML=(new Date().getFullYear());

// Changer Couleur Site
document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bleuinterbreizh').trim());