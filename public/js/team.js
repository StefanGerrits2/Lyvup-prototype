const info = document.querySelectorAll('.info__container');
const popup = document.querySelector('.popup__container')

console.log(info);

info.forEach((button) => {
    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });
});