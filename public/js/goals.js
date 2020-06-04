// adds the goal of the compliment as a class
document.querySelectorAll('.compliment__container').forEach(item => {
  const complimentGoal = item.querySelector(".goal-type").textContent.replace(/\s/g, '')
  item.classList.add(complimentGoal)
})

const complimentsButton = document.querySelector('.complimentsButton')
const complimentsContainer = document.querySelector('#super-goals__container')
const activeFilterText = complimentsContainer.querySelector('h2')

// sets all compliments to visible and shows their goal meta
complimentsButton.addEventListener('click', function() {
  document.querySelectorAll('.goal-type').forEach(item => {
    if (item.classList.contains('invisible')) {
      item.classList.remove('invisible')
    }
  })

  activeFilterText.innerHTML = `Klik op een doel om te filteren.`

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

    document.querySelectorAll('.goal__container').forEach(item => {
      item.classList.remove('active-section')
    })

    const goalType = event.currentTarget.querySelector('.goal-type').textContent.replace(/\s/g, '')
    const goalTypeText = event.currentTarget.querySelector('.goal-type').textContent
    activeFilterText.innerHTML = `op doel: <span class="goal-type">${goalTypeText}</span>`

    event.currentTarget.classList.add('active-section')

    // sets all compliments to hidden
    document.querySelectorAll('.compliment__container').forEach(item => {
      if (item.classList.contains('visible')) {
        item.classList.remove('visible')
        item.classList.add('hidden')
      }
    })

    // and shows only compliments corresponding to goalType
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