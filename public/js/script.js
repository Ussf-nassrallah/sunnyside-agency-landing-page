const navLinks = document.querySelector('#navLinks');
const navBtn = document.querySelector('#navBtn');

navBtn.addEventListener('click', function() {
  this.classList.toggle('open')
  navLinks.classList.toggle('active')
});