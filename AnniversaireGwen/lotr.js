const questions = [
    {
      question: "1. La Comté est située au sud de la Terre du Milieu.",
      answer: false
    },
    {
      question: "2. Bilbon Sacquet a quitté la Comté pour Fondcombe à l'âge de 111 ans.",
      answer: true
    },
    {
      question: "3. Le fleuve Brandevin sépare la Comté de la Lothlórien.",
      answer: false
    },
    {
      question: "4. La famille Touque est l'une des plus anciennes et riches familles de la Comté.",
      answer: true
    },
    {
      question: "5. Le personnage Tom Bombadil vit juste à l'est de Hobbitebourg, dans les collines de la Comté.",
      answer: false
    },
    {
      question: "6. Le Gaffer Gamegie, père de Sam, était jardinier chez les Sacquet pendant plus de 40 ans.",
      answer: true
    },
    {
      question: "7. Le village de Bree se trouve dans la Comté.",
      answer: false
    },
    {
      question: "8. La Comté est divisée en quatre quartiers, aussi appelés 'quarts'.",
      answer: true
    },
    {
      question: "9. Les Hobbits mesurent en moyenne entre 1,50 et 1,80 mètre de haut.",
      answer: false
    },
    {
      question: "10. Bilbon Sacquet a découvert l'Anneau Unique dans les cavernes des Monts Brumeux.",
      answer: true
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById("result");
    const nextQuestionButton = document.getElementById("next-question");
  
    if (userAnswer === currentQuestion.answer) {
      resultElement.textContent = "Bonne réponse ! Bravo chérie !";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Mauvaise réponse mon coeur...";
      resultElement.style.color = "red";
    }
  
    nextQuestionButton.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
    }
  
    const questionElement = document.getElementById("question");
    const resultElement = document.getElementById("result");
    const nextQuestionButton = document.getElementById("next-question");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    resultElement.textContent = "";
    nextQuestionButton.style.display = "none";
  }
  
  





  const mordorTexte = document.getElementById('mordor-texte');
const mordorChoix = document.getElementById('mordor-choix');

// L'état du jeu
let etapeActuelle = 0;

const histoire = [
    {
        texte: "Tu es en route pour Mordor avec l'Anneau unique. Mais la route est dangereuse. Que fais-tu ?",
        choix: [
            { texte: "Prendre le chemin à travers les montagnes", nextEtape: 1 },
            { texte: "Traverser la plaine sombre", nextEtape: 2 }
        ]
    },
    {
        texte: "Les montagnes sont pleines de dangers. Un Nazgûl t'attaque. Que fais-tu ?",
        choix: [
            { texte: "Fuir dans une grotte", nextEtape: 3 },
            { texte: "L'affronter avec l'Anneau", nextEtape: 4 }
        ]
    },
    {
        texte: "La plaine semble calme, mais tu entends des bruits étranges. Que fais-tu ?",
        choix: [
            { texte: "Explorer plus loin", nextEtape: 5 },
            { texte: "Retourner aux montagnes", nextEtape: 1 }
        ]
    },
    {
        texte: "Tu te caches dans une grotte, mais elle est pleine de créatures sombres. Que fais-tu ?",
        choix: [
            { texte: "Essayer de te faufiler à l'extérieur", nextEtape: 6 },
            { texte: "Te battre avec les créatures", nextEtape: 7 }
        ]
    },
    {
        texte: "Tu mets l'Anneau... et soudain, le Nazgûl te voit encore plus clairement ! Tu es capturée !",
        choix: [{ texte: "RÉESSAYER", nextEtape: 0 }]
    },
    {
        texte: "Tu explores plus loin et découvre un chemin secret vers le volcan de Mordor ! Tu es proche !",
        choix: [
            { texte: "Courir vers le volcan", nextEtape: 8 },
            { texte: "Te cacher un moment", nextEtape: 6 }
        ]
    },
    {
        texte: "Tu parviens à sortir de la grotte et tu continues ta quête vers Mordor.",
        choix: [
            { texte: "Aller vers le volcan", nextEtape: 8 }
        ]
    },
    {
        texte: "Les créatures te submergent... tu es vaincue.",
        choix: [{ texte: "RÉESSAYER", nextEtape: 0 }]
    },
    {
        texte: "Tu atteins le volcan de Mordor. C'est le moment ! Que fais-tu ?",
        choix: [
            { texte: "Jeter l'Anneau dans le feu !", nextEtape: 9 },
            { texte: "Garder l'Anneau pour toi...", nextEtape: 10 }
        ]
    },
    {
        texte: "Bravo ! Tu as réussi à détruire l'Anneau et sauver la Terre du Milieu !",
        choix: []
    },
    {
        texte: "La tentation de l'Anneau est trop forte... tu es perdue pour toujours.",
        choix: [{ texte: "RÉESSAYER", nextEtape: 0 }]
    }
];

// Fonction pour démarrer le jeu
function demarrerJeu() {
    afficherEtape(etapeActuelle);
}

// Fonction pour afficher l'étape actuelle
function afficherEtape(etape) {
    const etapeData = histoire[etape];
    mordorTexte.innerText = etapeData.texte;
    
    // Effacer les anciens choix
    mordorChoix.innerHTML = '';

    // Afficher les nouveaux choix
    etapeData.choix.forEach((choix) => {
        const bouton = document.createElement('button');
        bouton.innerText = choix.texte;
        bouton.onclick = () => {
            etapeActuelle = choix.nextEtape;
            afficherEtape(etapeActuelle);
            if (etapeActuelle== 8){
              document.querySelector('#ring').style.display = 'block';
            }
            else{
              document.querySelector('#ring').style.display = 'none';
            }
            if (etapeActuelle == 9){
              document.querySelector('#end').style.display = 'block';
              ;
            }
        };
        mordorChoix.appendChild(bouton);
    });
}

// Démarrer le jeu
demarrerJeu();
