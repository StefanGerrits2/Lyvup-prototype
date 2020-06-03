// adds the goal of the compliment as a class
document.querySelectorAll('.compliment__container').forEach(item => {
  const complimentGoal = item.querySelector(".goal-type").textContent.replace(/\s/g, '')
  item.classList.add(complimentGoal)
})

const complimentsButton = document.querySelector('.complimentsButton')
const complimentsContainer = document.querySelector('#super-goals__container')

// sets all compliments to visible
complimentsButton.addEventListener('click', function() {
  document.querySelectorAll('.compliment__container').forEach(item => {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden')
      item.classList.add('visible')
      complimentsContainer.classList.add('flashed')
      setTimeout(function() {
        complimentsContainer.classList.remove('flashed')
      }, 300);
    }
  })
})

document.querySelectorAll('.goal__container').forEach(item => {
  item.addEventListener('click', event => {

    const goalType = event.currentTarget.querySelector(".goal-type").textContent.replace(/\s/g, '')

    // sets all compliments to hidden
    document.querySelectorAll('.compliment__container').forEach(item => {
      if (item.classList.contains('visible')) {
        item.classList.remove('visible')
        item.classList.add('hidden')
      }
    })

    // and shows only compliments corresponding to goalType
    document.querySelectorAll(`.${goalType}`).forEach(item => {
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden')
        item.classList.add('visible')
        complimentsContainer.classList.add('flashed')
        setTimeout(function() {
          complimentsContainer.classList.remove('flashed')
        }, 300);
      }
    })
  })
})