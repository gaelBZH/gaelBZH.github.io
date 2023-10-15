function passwordshow()
{
    let x = document.getElementById("password");
    if (x.type === "password")
    {
      x.type = "text";
    }
    else
    {
      x.type = "password";
    }
}

function verifiermdp()
{
    let x = document.getElementById("password");
    let y = document.getElementById("boutonacces");
    let a = ["1","2","3","4","5","6","77","888","9"];
    let z = a[0]+a[8]+a[2]+a[8]+a[4]+a[5]+a[3]+a[4]+a[1]+a[1];
    x.style.color = "white";
    if (x.value == z)
    {
        x.style.backgroundColor = "green";
        y.disabled = false;
        x.readOnly = true;
        return true
    }
    else
    {
      x.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--ssbrouge').trim();
      y.disabled = true;
      return false
    }
}

function afficherpage(u){
    if (verifiermdp()||u==29)
    {
        document.querySelector("main").style.display = "block";
        document.getElementById("Sommaire").style.display="block";
        document.getElementsByClassName("Logo")[0].src = "SSB/BlasonSSB2.png";
    }
}

document.getElementById("year").innerHTML=(new Date().getFullYear());