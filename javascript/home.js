const navIcon = document.getElementById('nav-icon');
const navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


window.addEventListener("scroll", () => {
    let nav = document.querySelector(".header");
    nav.classList.toggle("sticky", scrollY > 0);
  });
  