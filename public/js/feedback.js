document.querySelectorAll('#button__container label').forEach(item => {
    item.addEventListener('click', showFilters);
});

function showFilters () {
    setTimeout(() => {
        if(!document.querySelector('#button__container #received').checked) {
            document.querySelector('#filter3').classList.add('hide');
        }
    
        else {
            document.querySelector('#filter3').classList.remove('hide');
        }
    }, 0);
}