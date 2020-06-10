// adds the goal of the compliment as a class
document.querySelectorAll('.compliment__container').forEach(item => {
  const complimentGoal = item.querySelector(".goal-type").textContent.replace(/\s/g, '')
  item.classList.add(complimentGoal)
})

const complimentsButton = document.querySelector('.complimentsButton')
const complimentsContainer = document.querySelector('#super-goals__container')
const filterText = complimentsContainer.querySelector('.goal-indicator')

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
        complimentsContainer.classList.add('flashed')
        setTimeout(function() {
          complimentsContainer.classList.remove('flashed')
        }, 300);
      }
    })
  })
})


const goalFormContainer = document.querySelector('.addGoals__container');
const goalsButton = document.querySelector('.goals-button');

goalFormContainer.classList.add('hidden');



if (document.addEventListener) {
  // Eventlistener exists
  goalsButton.addEventListener('click', toggleFilter);
  goalsButton.addEventListener('keypress', toggleFilter);

} else if (document.attachEvent) {
  // Eventlistener does not exist -> use attachEvent
  goalsButton.attachEvent('click', toggleFilter);
  goalsButton.attachEvent('keypress', toggleFilter);
}

function toggleFilter() {
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