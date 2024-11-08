document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector(".parallax");

    if (parallax) {
        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Calculate opacity based on scroll position
            const opacity = Math.max(0, 1 - scrollPosition / (windowHeight / 1.2));
            
            // Apply the calculated opacity to fade out the background
            parallax.style.opacity = opacity;
        });
    }
});
