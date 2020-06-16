const profile__container = document.querySelectorAll('.profile__container');

profile__container.forEach((element) => {
  console.log(element.querySelector(".info__container"))
  const completeFormContainer = element.querySelectorAll(".info__container").forEach(item => {
    item.addEventListener('click', () => {
      let card_index = Array.prototype.indexOf.call(profile__container);
      console.log(card_index);

      element.classList.toggle('collapse');
    });
  })
});


const adminCheckBox = document.querySelector(".admin-enabler-button")

//sets all admin button fields to hidden
const adminInit = document.querySelectorAll('.team-admin-options').forEach(item => {
  item.classList.add('hidden')
})

adminCheckBox.onchange = function() {
  if (adminCheckBox.checked) {
    const adminOptions = document.querySelectorAll('.team-admin-options').forEach(item => {
      item.classList.remove('hidden')
      item.classList.add('visible')
    })
  } else {
    const adminOptions = document.querySelectorAll('.team-admin-options').forEach(item => {
      item.classList.add('hidden')
      item.classList.remove('visible')
    })
  }
}