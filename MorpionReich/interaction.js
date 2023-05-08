/* initialisation des paramètres du jeu */
jeu = [[0,0,0],[0,0,0],[0,0,0]];
joueur = 1

/* fonction qui affiche l'état du tableau en lignes et en colonnes */
function affiche_jeu()
{
	chaine = "";
	for (var i=0; i<jeu.length; i++)
	{
		for (var j=0; j<jeu[i].length; j++)
		{
			chaine = chaine + jeu[i][j];
		}
		chaine = chaine + "\n";
	}
	// alert(chaine);
}
affiche_jeu();

/* COMPLETER LE CODE JAVASCRIPT ICI ! */
function afficher_joueur(i,j)
{
	let img = event.currentTarget;
	
	//Case vide?
	if (jeu[i][j]==0)
	{
		if (joueur == 1)
		{
			img.src="croixtrans.png";
		}
		else
		{
			img.src="rondtrans.png";
		}
	}
}

function efface_joueur(i,j)
{
	let img = event.currentTarget;
	
	if (jeu[i][j]==0)
	{
		img.src="fond.png";
	}
}

function jouer_coup(i,j)
{
	let img = event.currentTarget;
	
	//Case vide?
	if (jeu[i][j]==0)
	{
		if (joueur == 1)
		{
			img.src="croix.png";
		}
		else
		{
			img.src="rond.png";
		}
		jeu[i][j]=joueur;
		joueur=-joueur;
	}
}







function gagnant()
{
	if ((somme_ligne(0)==3)||(somme_ligne(1)==3)||(somme_ligne(2)==3) || (somme_colonne(0)==3)||(somme_colonne(1)==3)||(somme_colonne(2)==3) || (somme_diag()==3) || (somme_anti_diag()==3))
	{
		alert("Joueur 1 gagne")
		reset_events()
	}
	if ((somme_ligne(0)==-3)||(somme_ligne(1)==-3)||(somme_ligne(2)==-3) || (somme_colonne(0)==-3)||(somme_colonne(1)==-3)||(somme_colonne(2)==-3) || (somme_diag()==-3) || (somme_anti_diag()==-3))
	{
		alert("Joueur 2 gagne")
		reset_events()
	}
	

}

/* fonctions pour déterminer s'il y a un gagnant */
function somme_ligne(i)
{
	som = 0;
	for (var j=0; j<jeu[i].length; j++)
	{
		som = som + jeu[i][j];
	}
	return som;
}
function somme_colonne(j)
{
	som = 0;
	for (var i=0; i<jeu.length; i++)
	{
		som = som + jeu[i][j];
	}
	return som;				
}
function somme_diag()
{
	som = 0;
	for (var i=0; i<jeu.length; i++)
	{
		som = som + jeu[i][i];
	}
	return som;						
}
function somme_anti_diag()
{
	som = 0;
	for (var i=0; i<jeu.length; i++)
	{
		som = som + jeu[i][2-i];
	}
	return som;						
}




function reset_events()
{
	var img = document.getElementsByTagName("img");
	for (let i=0;i<=img.length;i++)
	{
		img[i].onclick="";
		img[i].onmouseover="";
		img[i].onmouseout="";

	
	}
}