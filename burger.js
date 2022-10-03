const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('kos-burger--active')
  headerNavigation.classList.toggle('yul-header__navigation')
})