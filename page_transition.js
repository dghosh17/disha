document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect when the page loads
    document.body.classList.add('fade-in');

    // Handle the fade-out effect when clicking on links
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = this.href;

            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = target;
            }, 500); // Wait for the fade-out transition before navigating
        });
    });
});
