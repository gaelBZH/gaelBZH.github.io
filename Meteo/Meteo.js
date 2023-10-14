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