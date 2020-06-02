const info = document.querySelectorAll('.info__container');
const popup = document.querySelector('.popup__container');
const clearScreen = document.querySelector('.clearScreen');
const close = document.querySelector('.close');

info.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('je klikte');
        popup.classList.add('show__popup');

        clearScreen.classList.add('blurScreen');

        close.addEventListener('click', () => {
            popup.classList.remove('show__popup');
            popup.classList.add('pop__container');
            clearScreen.classList.remove('blurScreen');
            clearScreen.classList.add('clearScreen');
        });

    });
});