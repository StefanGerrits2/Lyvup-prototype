// Create crosses when javascript is available
const cross1 = document.createElement('img');
const cross2 = document.createElement('img');

cross1.src = 'images/cross_icon-grey.svg';
cross2.src = 'images/cross_icon-grey.svg';

// Append to containers
document.querySelector('#name__container').appendChild(cross1);
document.querySelector('#email__container').appendChild(cross2);

// Source https://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up
// Setup before functions
let typingTimer;                // Timer identifier
const doneTypingInterval = 500;  // Timer 2 seconds
const inputs = document.querySelectorAll('.input');

inputs.forEach(item => {
    // On keyup, start the countdown
    item.addEventListener('keyup', function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping(item.id), doneTypingInterval);
    });

    // On keydown, clear the countdown 
    item.addEventListener('keydown', function () {
        clearTimeout(typingTimer);
    });
});

// User is "finished typing," do something
function doneTyping (type) {
    document.querySelector(`#${type}__container img`).classList.add('show-cross');
}

// Clear input on click
const nameCross = document.querySelector('#name__container img');
nameCross.addEventListener('click', () => {
    // Reset value
    document.querySelector('#name').value = '';
    // Remove cross
    nameCross.classList.remove('show-cross');
});

const emailCross = document.querySelector('#email__container img');
emailCross.addEventListener('click', () => {
    // Reset value
    document.querySelector('#email').value = '';
    // Remove cross
    emailCross.classList.remove('show-cross');
});

// Header animation
const toggleFooter = document.querySelector('#toggle-header');

toggleFooter.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    
    // Toggle footer
    footer.classList.toggle('footer-shrinked');
});