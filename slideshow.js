let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");

    slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove("fade");
    });

    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
