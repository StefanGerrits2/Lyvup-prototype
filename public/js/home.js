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
});

// Header animations
const toggleHeader = document.querySelector('#toggle-header');
const header = document.querySelector('#new-header');
const navTexts = document.querySelectorAll('#new-header li p');
const logo = document.querySelector('#logo');
const navIcons = document.querySelectorAll('#new-header li a img');
const dropdown = document.querySelector('#new-header .select');
const hoverableIcons = document.querySelectorAll('#new-header li');

toggleHeader.addEventListener('click', () => {
    // Toggle header
    header.classList.toggle('toggle-header');

    // Animation
    toggleHeader.classList.toggle('toggle-animation');

    // Toggle text
    for (let i = 0; i < navTexts.length; i++) {
        navTexts[i].classList.toggle('toggle-nav-text');
    }

    // Toggle logo
    logo.classList.toggle('toggle-logo');

    // Toggle icons
    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].classList.toggle('toggle-icons-width');
    }

    // Toggle dropdown
    dropdown.classList.toggle('hide-dropdown');

    // Toggle hoverable icons
    for (let i = 0; i < hoverableIcons.length; i++) {
        hoverableIcons[i].classList.toggle('hoverable');
    }

    // Move toggle header button
    toggleHeader.classList.toggle('move-button');
});