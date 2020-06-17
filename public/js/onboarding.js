const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const tabs = document.querySelectorAll('.tab');
const steps = document.querySelectorAll('.step');

let counter = 0;
showTab(counter);

nextBtn.addEventListener('click', () => {

    if (counter == 0) {
        if (document.querySelector('input[name=mail]').value == '' && 'undefined') {
            document.querySelector('input[name=mail]').style.boxShadow = '0 0 0 3px red';
        } else {
            counter += 1;
            showTab(counter);
        }
    } else if (counter == 1) {
        if (document.querySelector('input[name=code]').value == '' && 'undefined') {
            document.querySelector('input[name=code]').style.boxShadow = '0 0 0 3px red';
        } else {
            counter += 1;
            showTab(counter);
        }
    } else if (counter == 2) {
        if (document.querySelector('input[name=company]').value == '' && 'undefined' || document.querySelector('input[name=team]').value == '' && 'undefined') {
            if (document.querySelector('input[name=company]').value == '' && 'undefined') {
                document.querySelector('input[name=company]').style.boxShadow = '0 0 0 3px red';
            } else if (document.querySelector('input[name=team]').value == '' && 'undefined') {
                document.querySelector('input[name=team]').style.boxShadow = '0 0 0 3px red';
            } else {
                counter += 1;
                showTab(counter);
            }
        } else {
            counter += 1;
            showTab(counter);
        }
    } else if (counter == 3) {
        counter += 1;
        showTab(counter);
    }
});

prevBtn.addEventListener('click', () => {
    counter -= 1;
    showTab(counter);
});

function showTab(counter) {
    tabs.forEach((tab) => {
        tab.className = 'tab';
    });
    tabs[counter].className = 'current__tab';

    stepCounter(counter);

    if (counter == 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    } else if (counter == 3) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
    }
}


function stepCounter(counter) {
    steps.forEach((step) => {
        step.className = step.className.replace(' active', '');;
    });
    if (counter == counter) {
        steps[counter].className += ' active';
    }

    steps[counter].className += ' finish';
}

// steps.forEach((step) => {
//     step.addEventListener('click', () => {
//         let step_index = Array.prototype.indexOf.call(steps, step);
//         showTab(step_index);
//     });
// });