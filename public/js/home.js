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

const newCard = document.querySelectorAll('.new__card');

newCard.forEach((card) => {
    const expandText = document.getElementsByClassName('more__text');
    const expandReceivers = document.getElementsByClassName('expanded__receivers');
    const shortReceivers = document.getElementsByClassName('new__card_receivers');

    card.addEventListener('click', function () {
        let card_index = Array.prototype.indexOf.call(newCard, card);
        console.log(expandText[card_index]);

        if (expandText[card_index].classList.contains('hide') && expandReceivers[card_index].classList.contains('hide')) {
            expandText[card_index].classList.remove('hide');
            expandReceivers[card_index].classList.remove('hide');
            expandReceivers[card_index].classList.add('show');
            shortReceivers[card_index].style.display = 'none';
        } else {
            expandText[card_index].classList.add('hide');
            expandReceivers[card_index].classList.remove('show');
            expandReceivers[card_index].classList.add('hide');
            shortReceivers[card_index].style.display = 'flex';
        }
    });
});



/*newCard.addEventListener('click', function () {
    const expandText = document.getElementsByClassName('moreText');
    const expandReceivers = document.getElementsByClassName('moreReceivers');
    const shortReceivers = document.getElementsByClassName('new__card_receivers');

    for (i = 0; shortReceivers.length; i++) {

    }

    if (expandText.classList.contains('hide') && expandReceivers.classList.contains('hide')) {
        expandText.classList.remove('hide');
        expandReceivers.classList.remove('hide');
        expandReceivers.classList.add('show');
        shortReceivers.style.display = 'none';
    } else {
        expandText.classList.add('hide');
        expandReceivers.classList.remove('show');
        expandReceivers.classList.add('hide');
        shortReceivers.style.display = 'flex';
    }
});*/
