const superComplimentContainer = document.querySelector('#super-compliment__container');
const animationButton = document.getElementById('animationButton');
const animationBox = document.querySelector('.compliment__animation');

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
        const title = document.querySelector('#more-information h3');

        const memberInfo = document.querySelector('#goals__container');

        if (values.length > 1) {
            memberInfo.setAttribute('style', 'display: none');
            title.textContent = 'Geselecteerde personen:';
        }

        else if (values.length === 0) {
            memberInfo.setAttribute('style', 'display: none');
        }

        else {
            title.textContent = 'Geselecteerde persoon:';
            memberInfo.setAttribute('style', 'display: flex');
        }
    }, 0);
}

animationButton.addEventListener('click', function PlayAnimation() {
    console.log('bhoe');
    animationBox.classList.toggle('hidden');

    setTimeout(function () {
        animationBox.classList.toggle('hidden');
    }, 2500);
});