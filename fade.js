<script>
    const images = document.querySelectorAll('.image-container img');
    let index = 0;

    function fadeImages() {
        images[index].classList.remove('show');
        images[index].classList.add('fade');
        index = (index + 1) % images.length;
        images[index].classList.remove('fade');
        images[index].classList.add('show');
    }

    setInterval(fadeImages, 3000); 
</script>
