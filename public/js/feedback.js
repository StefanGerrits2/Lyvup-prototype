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