const profile__container = document.querySelectorAll('.profile__container');

profile__container.forEach((button) => {
    button.addEventListener('click', () => {
        let item_index = Array.prototype.indexOf.call(profile__container, button);

        console.log(item_index)

        // Add 1 to (index+1) until it reaches the clicked item
        let plus = 1;
        profile__container.forEach(function (button, index) {
            console.log(button);
            if (index < 1) {
                plus = 0;
            } else if (index == 1) {
                button.style.order = plus += 2;
                if (index = 2) {
                    button.style.order = index - 1;
                } else if (index = 3) {
                    button.style.order = index - 2;
                }
            } else if (index > 2) {
                button.style.order = index + 2;
            }
        });

        button.classList.toggle('collapse');

    });
});