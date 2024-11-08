window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Calculate opacity based on scroll position
    const opacity = Math.max(0, 1 - scrollPosition / (windowHeight / 1.2));
    
    // Apply the calculated opacity
    parallax.style.opacity = opacity;
});
