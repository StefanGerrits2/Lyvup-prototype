document.querySelector('.option1').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').textContent = 'Typ hier je compliment';
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').textContent = 'Vraag hier om feedback';
    }
});

document.querySelector('.option2').addEventListener('click', () => {
    if (!document.querySelector('#feedback').checked) {
        document.querySelector('h2').textContent = 'Compliment geven';
        document.querySelector('textarea').textContent = 'Compliment geven';
    }

    else {
        document.querySelector('h2').textContent = 'Feedback vragen';
        document.querySelector('textarea').textContent = 'Vraag hier om feedback';
    }
});