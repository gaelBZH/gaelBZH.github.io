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