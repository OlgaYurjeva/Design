const btnProgram = document.querySelector('.program__btn');

btnProgram.addEventListener('click', function () {
   menu.classList.toggle('program__menu--active');
   menuProgram.classList.toggle('program--active');
   if (menu.classList.contains('program__menu--active')) {
      this.style.cssText = 'top:15%';
   } else {
      this.style.cssText = 'top:15%%'
   }
})

const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.program__menu');
const menuProgram = document.querySelector('.program__inner');

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('program__menu--active');
   menuProgram.classList.toggle('program--active');
});
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   effect: "fade",
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

})
const questionTitles = document.querySelectorAll('.question__title');
const Btn = document.querySelectorAll('.plus');
const qAnswer = document.querySelectorAll('.question__answer');

Btn.forEach(function (item) {
   item.addEventListener("click", function () {
      this.classList.toggle('minus');
      this.previousElementSibling.classList.toggle('hidden');

   })
})

questionTitles.forEach(function (item) {
   item.addEventListener("click", function () {

      qAnswer.forEach(function (item) {
         item.classList.add('hidden');
      })

      Btn.forEach(function (item) {
         item.classList.remove('minus');
      })
      
      this.nextElementSibling.classList.toggle('hidden');
      this.nextElementSibling.nextElementSibling.classList.add('minus');
      
      
   })
})




