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

const dots = [dot1, dot2, dot3, dot4];

const carouselContainer = document.getElementById("carousel");
const carouselImgContainer = carouselContainer.querySelector(".carousel__img");
const carouselTagContainer = carouselContainer.querySelector(".carousel__txt");

const left = document.getElementById("left");
const right = document.getElementById("right");
let endClick = false;

i = 0;
let carouselImg = slides[i].image;
let carouselTag = slides[i].tagLine;
let selectedDotID = dots[i];

selectedDotID.classList.add("dot_selected");

left.addEventListener("click", () => {
  if (i > 0) {
    i = i - 1;
    let selectedDotID = dots[i];
    let previousDotID = dots[i + 1];
    let carouselImg = slides[i].image;
    let carouselTag = slides[i].tagLine;

    selectedDotID.classList.add("dot_selected");
    previousDotID.classList.remove("dot_selected");
    carouselImgContainer.setAttribute(
      "src",
      "./assets/images/slideshow/" + carouselImg
    );
    carouselTagContainer.innerHTML = "<p>" + carouselTag + "</p>";
  } else {
	i = 3;
    let selectedDotID = dots[i];
    let previousDotID = dots[0];
    let carouselImg = slides[i].image;
    let carouselTag = slides[i].tagLine;

    selectedDotID.classList.add("dot_selected");
    previousDotID.classList.remove("dot_selected");
    carouselImgContainer.setAttribute(
      "src",
      "./assets/images/slideshow/" + carouselImg
    );
    carouselTagContainer.innerHTML = "<p>" + carouselTag + "</p>";
  }
});

right.addEventListener("click", () => {
  if (i <= 2) {
    i = i + 1;
    let selectedDotID = dots[i];
    let previousDotID = dots[i - 1];
    let carouselImg = slides[i].image;
    let carouselTag = slides[i].tagLine;

    selectedDotID.classList.add("dot_selected");
    previousDotID.classList.remove("dot_selected");
    carouselImgContainer.setAttribute(
      "src",
      "./assets/images/slideshow/" + carouselImg
    );
    carouselTagContainer.innerHTML = "<p>" + carouselTag + "</p>";
  } else {
	i = 0;
    let selectedDotID = dots[i];
    let previousDotID = dots[3];
    let carouselImg = slides[i].image;
    let carouselTag = slides[i].tagLine;

    selectedDotID.classList.add("dot_selected");
    previousDotID.classList.remove("dot_selected");
    carouselImgContainer.setAttribute(
      "src",
      "./assets/images/slideshow/" + carouselImg
    );
    carouselTagContainer.innerHTML = "<p>" + carouselTag + "</p>";
  }
});
