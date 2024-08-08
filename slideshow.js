let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");

    // Hide all slides and remove fade class
    slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove("fade");
    });

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }

    // Show the current slide and add fade class
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");

    // Call showSlides every 3 seconds
    setTimeout(showSlides, 3000);
}
