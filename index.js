const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('onscroll' ,() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove(".active")
})

const searchicon = document.querySelector('#search-icon');
const searchform = document.querySelector('#search-form');

searchicon.addEventListener('click',() => {
    searchform.classList.toggle('active')
});
const clo = document.querySelector('#close');

clo.addEventListener('click',()=>{
    searchform.classList.remove('active')
})

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });
