/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    delay: 100,
    reset: false,
  });
  
  sr.reveal(".home__content", { origin: "top", delay: 400 });
  sr.reveal(".home__subtitle", { origin: "top", delay: 700 });
  sr.reveal(".introduction__top", { origin: "top" });
  sr.reveal(".introduction__bottom", { origin: "bottom"});
  sr.reveal(".products__content-right", { origin: "top"});
  sr.reveal(".products__content-left", { origin: "top"});
  sr.reveal(".products__title", { origin: "bottom" });
  sr.reveal(".slider__box", { origin: "bottom" });
  sr.reveal(".texts", { origin: "bottom" });
  sr.reveal(".boxes__item", { origin: "top" });
  sr.reveal(".boxes__item--grey", { origin: "bottom", delay: 200 });
  sr.reveal(".brand", { origin: "top"});
  sr.reveal(".footer__content", { origin: "top" });
  sr.reveal(".footer__top", { origin: "top"});