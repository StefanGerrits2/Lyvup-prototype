const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.blur();
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}




const dots = document.getElementById('dots');
const moreText = document.getElementById('more');
const moreButton = document.getElementById('moreButton');

moreButton.addEventListener('click', function () {
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreButton.innerHTML = 'Lees meer';
        moreText.style.display = 'none';
        moreButton.blur();
    } else {
        dots.style.display = 'none';
        moreButton.innerHTML = 'Lees minder';
        moreText.style.display = 'inline';
        moreButton.blur();
    }
})