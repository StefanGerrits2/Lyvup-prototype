const superComplimentContainer = document.querySelector('#super-compliment__container');

document.querySelector('.option1').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').placeholder = 'Typ hier je compliment';
        superComplimentContainer.setAttribute('style', 'display: flex');
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').placeholder = 'Vraag hier om feedback';
        superComplimentContainer.setAttribute('style', 'display: none');
        document.querySelector('#supercompliment').checked = false;
    }
});

document.querySelector('.option2').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').placeholder = 'Typ hier je compliment';
        superComplimentContainer.setAttribute('style', 'display: flex');
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').placeholder = 'Vraag hier om feedback';
        superComplimentContainer.setAttribute('style', 'display: none');
        document.querySelector('#supercompliment').checked = false;
    }
});

// Super compliment button
const superComplimentLabel = document.querySelector('#super-compliment__button');
let superComplimentStatus = false;

superComplimentLabel.addEventListener('click', () => {
    if (!superComplimentStatus) {
        superComplimentLabel.textContent = 'Super compliment geactiveerd!';
        superComplimentStatus = true;
    }

    else {
        superComplimentLabel.textContent = 'Activeer een super compliment';
        superComplimentStatus = false;
    }
});

// Show selected members
// Change on click
document.querySelectorAll('#team-member__container label').forEach(item => {
    item.addEventListener('click', showSelectedMembers);
});
document.querySelector('#select-all').addEventListener('click', showSelectedMembers);

// Select all and deselect all buttons
document.querySelector('#select-all').addEventListener('click', selectAllCheckboxes);
document.querySelector('#deselect-all').addEventListener('click', deSelectAllCheckboxes);

// Select all checkboxes
function selectAllCheckboxes() {
    const checkboxes = document.querySelectorAll(' #team-member__container input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
    showSelectedMembers();
}

// Deselect all checkboxes
function deSelectAllCheckboxes() {
    console.log('test');
    const checkboxes = document.querySelectorAll(' #team-member__container input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    showSelectedMembers();
}

// Show list of selected members
function showSelectedMembers() {
    setTimeout(() => {
        // Get values
        const values = Array
            .from(document.querySelectorAll('input[type="checkbox"]'))
            .filter((checkbox) => checkbox.checked && checkbox.value !== 'yes')
            .map((checkbox) => checkbox.value);

        // Reset container
        const container = document.querySelector('#selected-members');
        container.textContent = '';

        // Create list
        values.forEach(item => {
            const p = document.createElement('p');
            container.appendChild(p);
            p.textContent = item;
        });

        // Change title bases on amount of people selected
        const title = document.querySelector('#selected-members__container h4');
        title.textContent = values.length > 1 ? 'Geselecteerde personen:' : 'Geselecteerde persoon:';
    }, 0);
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