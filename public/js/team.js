const profile__container = document.querySelectorAll('.profile__container');

profile__container.forEach((button) => {
    button.addEventListener('click', () => {
        let card_index = Array.prototype.indexOf.call(profile__container, button);
        console.log(card_index);

        button.classList.toggle('collapse');
    });
});

// Header animations
const toggleFooter = document.querySelector('#toggle-header');

toggleFooter.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    
    // Toggle footer
    footer.classList.toggle('footer-shrinked');
});