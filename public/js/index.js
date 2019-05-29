TweenMax.from("h1", 1, {opacity:0.3, y:-200});
TweenMax.from("h2", 1, {opacity:0.3, y:-200, delay: 1});

var nav = document.getElementById("nav");
var image = document.getElementById("image");
var menu = document.getElementById("menu");

var show = false;
window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);
  
  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansFast = document.querySelectorAll('.spanFast');

  let width = window.innerWidth;

  function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  //we need to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }


function myFunction (){
console.log("ejecutando");
if(show === false){
	nav.classList.add("navShow");
	image.classList.add("imageShow");
	console.log("mostrar");
	show=true;
}else{
	nav.classList.remove("navShow");
	image.classList.remove("imageShow");
	show=false;
	console.log("ocultar");
}
}
//SWIPER
var swiper = new Swiper('.swiperWoman', {
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	},
  });
  var swiper = new Swiper('.swiperMan', {
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	},
  });
console.log(scrollY);
  var myScrollFunc = function() {
	var y = window.scrollY;
	if (y >= 900 && y<=3810) {
	  menu.innerHTML = "<img src='./icons/menublack.svg' class='burger__menu nav-toggle-bar'>";
	}else {
	  menu.innerHTML ="<img src='./icons/menu.svg' class='burger__menu nav-toggle-bar'>";
	}
  };
  
  window.addEventListener("scroll", myScrollFunc);


