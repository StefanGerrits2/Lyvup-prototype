const messages = document.querySelectorAll('.message');

document.querySelectorAll('#button__container label').forEach(item => {
    item.addEventListener('click', showFilters);
});

function showFilters () {
    setTimeout(() => {
        if(!document.querySelector('#button__container #received').checked) {
            document.querySelector('#filter3').classList.add('hide');

            messages.forEach(item => {
                item.setAttribute('style', 'display: none');
            });
        }
    
        else {
            document.querySelector('#filter3').classList.remove('hide');

            messages.forEach(item => {
                item.setAttribute('style', 'display: flex');
            });
        }
    }, 0);
}

document.querySelectorAll('label').forEach(item => {
    item.addEventListener('keypress', () => {
        item.click();
    });
});


const toggleMembers = document.querySelector('#filter2 p');
const hiddenLabels = document.querySelectorAll('.hiddenLabels');

let toggleMembersState = true;

toggleMembers.addEventListener('click', () => {

    if(toggleMembersState) {
        toggleMembers.textContent = 'Toon minder leden';
        toggleMembersState = false;

        hiddenLabels.forEach(item => {
            item.setAttribute('style', 'display: flex');
        });
    }

    else {
        toggleMembers.textContent = 'Toon alle leden';
        toggleMembersState = true;

        hiddenLabels.forEach(item => {
            item.setAttribute('style', 'display: none');
        });
    }
});