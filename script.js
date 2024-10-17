let currentIndex = 0;
const slides = document.querySelectorAll('input[name="slide"]');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].checked = true;
}

setInterval(showNextSlide, 2000);

