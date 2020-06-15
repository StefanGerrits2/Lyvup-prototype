// Header animations
const toggleFooter = document.querySelector('#toggle-header');

toggleFooter.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    
    // Toggle footer
    footer.classList.toggle('footer-shrinked');
});