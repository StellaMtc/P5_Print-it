//Images du slide
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

	// Pour vérifier que le DOM est complètement chargé avant d'éxécuter le reste du code
document.addEventListener("DOMContentLoaded", () => {
    // Je déclare les variables
    let count = 0;

    // Paramètres des éléments HTML modifiés 
    const bannerSlides = document.querySelector(".banner-img");
    const bannerTagLine = document.querySelector("#banner p");

    // Flèches gauche et droite
    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");

    // Les bullet points
    const dotsSlides = document.querySelector(".dots");

    // Création du bullet points avec la fonction forEach
    slides.forEach(() => {
        let dot = document.createElement('div');
        dot.classList.add("dot");
        dotsSlides.appendChild(dot);
    });

    // Sélection des différents bullet points
    const dotSelected = document.querySelectorAll(".dot");
    dotSelected[count].classList.add("dot_selected");

    // Slide en cours
    function showSlide() {
        bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
        bannerTagLine.innerHTML = slides[count].tagLine;
    }

    // Slide diapositive précédente
    function previousSlide() {
        dotSelected[count].classList.remove("dot_selected");
        count = (count <= 0) ? slides.length - 1 : count - 1;
        dotSelected[count].classList.add("dot_selected");
        showSlide();
    }

    // Slide diapositive suivante
    function nextSlide() {
        dotSelected[count].classList.remove("dot_selected");
        count = (count >= slides.length - 1) ? 0 : count + 1;
        dotSelected[count].classList.add("dot_selected");
        showSlide();
    }

    // Ajout des Event listeners sur les flèches gauche et droite
    arrowLeft.addEventListener("click", previousSlide);
    arrowRight.addEventListener("click", nextSlide);

    // Affiche le slide initial
    showSlide();
});
