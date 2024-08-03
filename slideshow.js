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

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;

    // Rotate arrows if needed
    rotateArrows();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function rotateArrows() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.style.transform = 'rotate(0deg)'; // Ensure the previous button is upright
    nextBtn.style.transform = 'rotate(0deg)'; // Ensure the next button is upright
}

// Initialize the carousel
showSlide(currentSlide);

// Optional: Auto-slide functionality (remove if not needed)
// setInterval(nextSlide, 3000);
