let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransform = -currentSlide * 600;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransform}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatically show the first slide
showSlide(currentSlide);
