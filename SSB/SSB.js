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
      x.style.backgroundColor = "red";
      y.disabled = true;
      return false
    }
}

function afficherpage(u){
    if (verifiermdp()||u==29)
    {
        document.getElementById("verrouille").open = true;
        document.getElementsByClassName("Logo")[0].src = "SSB/BlasonSSB.png";
        document.getElementById("TitrePrincipal").textContent = "Bureau du SSB"
        document.getElementsByTagName("h2")[0].textContent="Bureau et Archives des Services Secrets Bretons";
        document.getElementById("Sommaire").style.visibility="visible";
    }
}
