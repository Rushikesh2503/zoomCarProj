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
