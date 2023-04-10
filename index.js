let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-list');
let menuItem = document.querySelectorAll('.header-link');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})
