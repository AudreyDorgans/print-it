// FONCTION POUR METTRE A JOUR L'INDEX DU SLIDE EN COURS

function changeSlideIndex(direction) {

  if (direction === 'gauche') {

    actuelSlide = (actuelSlide - 1);

     if(actuelSlide < 0) {
        actuelSlide = 3 ;
    }

  } else if (direction === 'droite') {

    actuelSlide = (actuelSlide + 1);

     if(actuelSlide > 3) {
        actuelSlide = 0 ;
    }
  }
}

// FONCTION POUR METTRE A JOUR L'IMAGE ET LE TEXTE

function changeImageTexte() {

    const bannerImage = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');

    bannerImage.src = './assets/images/slideshow/' + slides[actuelSlide].image;

    tagLine.innerHTML = slides[actuelSlide].tagLine;
}

// FONCTION POUR METTRE A JOUR LES DOT

function changeDots () {

    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_selected');

        if (i === actuelSlide) {
            dots[i].classList.add('dot_selected');
        }
    }
}

