let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide-fade");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Mude a cada 5 segundos (5000 milissegundos)
}