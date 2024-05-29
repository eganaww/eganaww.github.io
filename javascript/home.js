const navIcon = document.getElementById('nav-icon');
const navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});