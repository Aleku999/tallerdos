TweenMax.from("h1", 1, {opacity:0.3, y:-200});
TweenMax.from("h2", 1, {opacity:0.3, y:-200, delay: 1});

var nav = document.getElementById("nav");
var image = document.getElementById("image");
var menu = document.getElementById("menu");

var show = false;


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


