let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Loop back to the beginning or end of the slides
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    } 

    // Calculate the new transform value
    const slideWidth = document.querySelector('.carousel-container').offsetWidth;
    const newTransform = -currentSlide * slideWidth;
    document.query
