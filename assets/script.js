const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
  
];

const carouselContainer = document.getElementById("carousel");
const carouselImgContainer = carouselContainer.querySelector(".carousel__img");
const carouselTagContainer = carouselContainer.querySelector(".carousel__txt");

const btnSliderPrevious = document.getElementById("left");
const btnSliderNext = document.getElementById("right");
let dots = document.querySelector(".dots");
let currentSlide = 0;

/**
 * création des dots en fonction du nombre de slides
 */
for (let i = 0; i < slides.length; i++) {
  let dotSpan = document.createElement("span");

  dots.appendChild(dotSpan);
  dotSpan.setAttribute("id", "dot" + i);
  dotSpan.classList.add("dot");
}
const dot = document.querySelectorAll(".dot");
/**
 * Affiche la slide en fonction de la variable currentSlide
 */
function displaySlide(slideToDisplay) {
  // Met à jour l'affichage de la slide (title, tag, src)
  let carouselImg = slides[slideToDisplay].image;
  let carouselTag = slides[slideToDisplay].tagLine;

  carouselImgContainer.setAttribute(
    "src",
    "./assets/images/slideshow/" + carouselImg
  );
  carouselTagContainer.innerHTML = "<p>" + carouselTag + "</p>";

  // Met à jour les classes du dots
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot_selected");
  }

  dot[slideToDisplay].classList.add("dot_selected");
}

/**
 * Affiche la slide précedente en cliquant sur la fleche de gauche
 */
btnSliderPrevious.addEventListener("click", () => {
  // Mise à jours du compteur currentSlide
  if (currentSlide > 0) {
    // On incrémente le compteur
    currentSlide--;
  } else {
    // On réinitialise le compteur à la fin du slider
    currentSlide = slides.length - 1;
  }

  // currentSlide = ( currentSlide > 0 ? currentSlide - 1 : slides.length - 1 )

  // Affichage de la slide
  displaySlide(currentSlide);
});

/**
 *Affiche la slide suivante en cliquant sur la fleche de droite
 */
btnSliderNext.addEventListener("click", () => {
  // mise à jours du compteur currentSlide
  if (currentSlide < slides.length - 1) {
    // On décremente le compteur
    currentSlide++;
  } else {
    // On réinitialise le compteur au début du slider
    currentSlide = 0;
  }

  // Affichage de la slide
  displaySlide(currentSlide);
});

/**
 * Affichage de la slide concernée au click sur un dot
 */
for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    // Mise à jours du compteur currentSlide
    currentSlide = i;

    // Affichage de la slide
    displaySlide(currentSlide);
  });
}

//
displaySlide(currentSlide);

