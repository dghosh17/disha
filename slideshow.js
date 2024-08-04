const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === n) {
            slide.classList.add('active');
        }
    });
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Optional: Auto-slide functionality
// setInterval(nextSlide, 3000);
