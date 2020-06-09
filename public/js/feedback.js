const filterContainer = document.querySelector('.filter__container');
const filterButton = document.querySelector('.filter-button');

filterContainer.classList.add('hide');
filterButton.classList.add('show');

if (document.addEventListener) {
    // Eventlistener exists
    filterButton.addEventListener('click', toggleFilter);
    filterButton.addEventListener('keypress', toggleFilter);
    
}
    
else if (document.attachEvent) {              
    // Eventlistener does not exist -> use attachEvent
    filterButton.attachEvent('click', toggleFilter);
    filterButton.attachEvent('keypress', toggleFilter);
}

function toggleFilter() {
    if (filterContainer.classList.contains('hide')) {
        filterContainer.classList.remove('hide');
        filterContainer.classList.add('show');
    }

    else {
        filterContainer.classList.add('hide');
        filterContainer.classList.remove('show');
    }
}

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