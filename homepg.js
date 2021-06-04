//LogIn POP
var logIn = document.getElementById("login_btn");
logIn.addEventListener("click", popupCome);
function popupCome() {
  var pop_up1 = document.querySelector("#pop1");
  pop_up1.style.display = "flex";
}
//Signup POP
var signIn = document.getElementById("signup_btn");
signIn.addEventListener("click", popupCome);
function popupCome() {
  var pop_up1 = document.querySelector("#pop1");
  pop_up1.style.display = "flex";
}

//cut pop-up""
var cancel1 = document.querySelector(".close1");
cancel1.addEventListener("click", popCancel);
function popCancel() {
  var pop_up_can = document.querySelector("#pop1");
  pop_up_can.style.display = "none";
}
//auto_slider
var counterr = 1;
setInterval(function () {
  var cir_div = (document.getElementById("radio" + counterr).checked = true);

  var zPro1 = document.querySelector("#zoomPromo1");
  var zPro2 = document.querySelector("#zoomPromo2");
  var zPro3 = document.querySelector("#zoomPromo3");
  if (counterr == 1) {
    zPro1.style.display = "block";
    zPro2.style.display = "none";
    zPro3.style.display = "none";
  }

  if (counterr == 2) {
    zPro1.style.display = "none";
    zPro2.style.display = "block";
    zPro3.style.display = "none";
  }
  if (counterr == 3) {
    zPro1.style.display = "none";
    zPro2.style.display = "none";
    zPro3.style.display = "block";
  }
  counterr++;
  if (counterr > 3) {
    counterr = 1;
  }
}, 3000);

//                                      MIDDLE PAGE JS                             //

var slideIndex = 1;
slideview(slideIndex);

// Next/previous controls
function plusMove(n) {
  slideview((slideIndex += n));
}

// Thumbnail image controls

function slideview(n) {
  var i;
  var slides = document.getElementsByClassName("row");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//                                                        last part of home page

var index = 1;
showSlides(index);
//Next/previous controls
function plusItems(n) {
  showSlides((index += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item2");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index - 1].style.display = "block";
}

// press autoplay Slide

var slideIndex = 1;
function plusSlides(n) {
  showSlides2((slideIndex = n));
}
showSlides2(slideIndex);

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slides1");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

//   var chng = document.getElementsByClassName('Button');

function changeColor(id) {
  var mouse = document.getElementById(`${id}`);
  var drag = document.getElementById(`p${id}`);
  var change = "rgb(34,34,41)";
  var newTxt = "green";
  mouse.style.backgroundColor = change;
  drag.style.color = newTxt;
  mouse.removeEventListener("mouseout", changeColor(`${id}`));
}
function initial(id) {
  var mouse = document.getElementById(`${id}`);
  var drag = document.getElementById(`p${id}`);
  mouse.style.backgroundColor = "rgb(51, 65, 79)";
  drag.style.color = "rgb(255, 255, 255)";
}

// mouse.addEventListener('mouseover', changeColor);
// mouse.addEventListener('mouseout', initial);
