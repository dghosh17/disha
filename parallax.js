
<script>
document.addEventListener('DOMContentLoaded', () => {
  const parallaxContent = document.querySelector('.parallax-content');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        parallaxContent.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(parallaxContent);
});
</script>
