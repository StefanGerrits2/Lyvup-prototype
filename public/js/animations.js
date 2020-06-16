const animationButton = document.getElementById('animationButton');
const animationBox = document.querySelector('.compliment__animation');
const complimentSend = document.querySelector('.defaultButton');
const complimentSwitch = document.querySelector('.complimentBounce');
const feedbackSwitch = document.querySelector('.feedbackBounce');

PlayAnyAnimation(complimentSend, 'Shake', 500);

animationButton.addEventListener('click', function PlayAnimation() {
    animationBox.classList.toggle('hidden');

    setTimeout(function () {
        animationBox.classList.toggle('hidden');
    }, 2500);
});

function PlayAnyAnimation(elementToAnimate, className, time) {
    complimentSend.addEventListener('click', function () {
        elementToAnimate.classList.add(className);

        setTimeout(function () {
            elementToAnimate.classList.remove(className);
        }, time);
    });
}