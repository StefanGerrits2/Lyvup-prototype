const container = document.querySelector('#get-started');
const addPerson = document.querySelector('#addPerson')

container.insertAdjacentHTML('afterend', `<li class = "get-started">
<a href = "/get-started"> Get started </a> </li>`);

addPerson.addEventListener('click', () => {

    const name = document.querySelector('#naam').value;
    const mail = document.querySelector('#email').value;

    const personCard = document.querySelector('.person__card-container');

    personCard.insertAdjacentHTML('afterbegin', `<div class="person__card"><img src="/images/user.png" alt=""><p>${name}</p><p>${mail}</p></div>`);
});

// Header animation
const toggleFooter = document.querySelector('#toggle-header');

toggleFooter.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    
    // Toggle footer
    footer.classList.toggle('footer-shrinked');
});