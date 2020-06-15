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

const toggleMembers = document.querySelector('#toggle-members');
const toggleMembersText = document.querySelector('#toggle-members-text');
const labelContainer = document.querySelector('#filter2 div');
const chevronImage = document.querySelector('#toggle-members img');

let toggleMembersState = true;

toggleMembers.addEventListener('click', () => {

    if(toggleMembersState) {
        toggleMembersText.textContent = 'Toon minder leden';
        toggleMembersState = false;

        chevronImage.classList.add('rotateChevron');

        labelContainer.classList.add('increaseContainer');
    }

    else {
        toggleMembersText.textContent = 'Toon alle leden (+4)';
        toggleMembersState = true;

        chevronImage.classList.remove('rotateChevron');

        labelContainer.classList.remove('increaseContainer');
    }
});

// Header animation
const toggleFooter = document.querySelector('#toggle-header');

toggleFooter.addEventListener('click', () => {
    const footer = document.querySelector('footer');

    // Toggle footer
    footer.classList.toggle('footer-shrinked');
});