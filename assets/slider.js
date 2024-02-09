// Initialise l'index du slide initial
  let actuelSlide = 0;


// Ajoute un écouteur d'événement pour la flèche gauche
  const arrowLeft = document.querySelector('.arrow_left');
  
  arrowLeft.addEventListener('click', () => {

    console.log("Vous avez cliqué sur la flèche gauche");

    changeSlideIndex('gauche');
    changeDots();
    changeImageTexte();
  });


  // Ajoute un écouteur d'événement pour la flèche droite
const arrowRight = document.querySelector('.arrow_right');
  arrowRight.addEventListener('click', () => {

    console.log("Vous avez cliqué sur la flèche droite");

    // Met à jour index, dot, image et texte
    changeSlideIndex('droite');
    changeDots();
    changeImageTexte();

  });


  // Crée les dots pour chaque élément dans le tableau slides

  for (let i = 0; i < slides.length; i++) {

  	const dot = document.createElement("div");
    
    dot.classList.add("dot");
   
    let parentElement = document.querySelector(".dots");

    parentElement.appendChild(dot);
}

changeDots();












