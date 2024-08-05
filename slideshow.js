let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    // Increment slideIndex and loop back if necessary 
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
