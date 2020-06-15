const animationButton = document.querySelector('animationButton');
const animationBox = document.querySelector('.compliment__animation');

// adds the goal of the compliment as a class
document.querySelectorAll('.compliment__container').forEach(item => {
  const complimentGoal = item.querySelector(".goal-type").textContent.replace(/\s/g, '')
  item.classList.add(complimentGoal)
})

const complimentsButton = document.querySelector('.complimentsButton')
const complimentsContainer = document.querySelector('#super-goals__container')
const filterText = complimentsContainer.querySelector('.goal-indicator')
const complimentsSection = document.querySelector('#messages__container')

// sets all compliments to visible and visibles their goal meta
complimentsButton.addEventListener('click', function() {
  filterText.classList.remove('indicator-active')
  filterText.classList.add('indicator-inactive')
  document.querySelectorAll('.goal-type').forEach(item => {
    if (item.classList.contains('invisible')) {
      item.classList.remove('invisible')
    }
  })

  filterText.innerHTML = `Klik op een doel om te filteren.`

  document.querySelectorAll('.compliment__container').forEach(item => {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden')
      item.classList.add('visible')
    }
    document.querySelectorAll('.goal__container').forEach(item => {
      item.classList.remove('active-section')
    })
    item.classList.remove('active-section')
  })
})

// makes goals clickable and initiates the filter
document.querySelectorAll('.goal__container').forEach(item => {
  item.addEventListener('click', event => {
    filterText.classList.remove('indicator-inactive')
    filterText.classList.add('indicator-active')

    document.querySelectorAll('.goal__container').forEach(item => {
      item.classList.remove('active-section')
    })

    const goalType = event.currentTarget.querySelector('.goal-type').textContent.replace(/\s/g, '')
    const goalTypeText = event.currentTarget.querySelector('.goal-type').textContent
    filterText.innerHTML = `${goalTypeText}`

    event.currentTarget.classList.add('active-section')

    // sets all compliments to hidden
    document.querySelectorAll('.compliment__container').forEach(item => {
      if (item.classList.contains('visible')) {
        item.classList.remove('visible')
        item.classList.add('hidden')
      }
    })

    // and visibles only compliments corresponding to goalType
    document.querySelectorAll(`.${goalType}`).forEach(item => {
      const goalMeta = item.querySelector('.goal-type')
      goalMeta.classList.add('invisible')
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden')
        item.classList.add('visible')
        item.classList.remove('active-section')
        item.classList.add('active-section')
        complimentsSection.classList.add('flashed')
        setTimeout(function() {
          complimentsSection.classList.remove('flashed')
        }, 300);
      }
    })
  })
})

// add goal form animations
const goalFormContainer = document.querySelector('.addGoals__container');
const goalsButton = document.querySelector('.goals-button');

goalFormContainer.classList.add('hidden');

if (document.addEventListener) {
  // Eventlistener exists
  goalsButton.addEventListener('click', toggleGoalForm);
  goalsButton.addEventListener('keypress', toggleGoalForm);

} else if (document.attachEvent) {
  // Eventlistener does not exist -> use attachEvent
  goalsButton.attachEvent('click', toggleGoalForm);
  goalsButton.attachEvent('keypress', toggleGoalForm);
}

function toggleGoalForm() {
  if (goalFormContainer.classList.contains('hidden')) {
    goalFormContainer.classList.remove('hidden');
    goalFormContainer.classList.add('visible');
    goalFormContainer.classList.toggle('expand');
  } else {
    goalFormContainer.classList.add('hidden');
    goalFormContainer.classList.remove('visible');
    goalFormContainer.classList.toggle('expand');
  }
}

// edit goal form animations
const editFormContainer = document.querySelectorAll('#edit-goals__container').forEach(item => {
  item.classList.add('hidden');
})
const editButton = document.querySelectorAll('.goal-editor').forEach(item => {
  item.addEventListener('click', () => {
    event.target.innerHTML = "annuleren"
    event.target.classList.add('red')
    editFormId = event.target.id
    const selectedForm = document.querySelector(`.edit-${editFormId}`)
    if (selectedForm.classList.contains('hidden')) {
      selectedForm.classList.remove('hidden')
      selectedForm.classList.add('visible')
      selectedForm.classList.toggle('expandSmall');
    } else {
      selectedForm.classList.add('hidden')
      selectedForm.classList.remove('visible')
      selectedForm.classList.toggle('expandSmall');
      event.target.classList.remove('red')
      event.target.innerHTML = "doel aanpassen"
    }
  });
});

animationButton.addEventListener('click', function PlayAnimation() {
  animationBox.classList.toggle('hidden');

  setTimeout(function () {
      animationBox.classList.toggle('hidden');
  }, 2500);
});