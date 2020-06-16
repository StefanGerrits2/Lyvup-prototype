// Header animations
const toggleHeader = document.querySelector('#toggle-header');
const header = document.querySelector('header');
const navTexts = document.querySelectorAll('header li p');
const logo = document.querySelector('#logo');
const navIcons = document.querySelectorAll('header li a img');
const dropdown = document.querySelector('header .select');
const hoverableIcons = document.querySelectorAll('header li');

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