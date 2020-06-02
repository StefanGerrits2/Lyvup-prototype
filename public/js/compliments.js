document.querySelector('.option1').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').placeholder = 'Typ hier je compliment';
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').placeholder = 'Vraag hier om feedback';
    }
});

document.querySelector('.option2').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').placeholder = 'Typ hier je compliment';
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').placeholder = 'Vraag hier om feedback';
    }
});