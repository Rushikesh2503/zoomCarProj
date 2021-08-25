let start_city = JSON.parse(localStorage.getItem("start_city_name"));
let drop_city = JSON.parse(localStorage.getItem("drop_city_name"));
let pick_dt = JSON.parse(localStorage.getItem("pick_up_date"));
let pick_ti = JSON.parse(localStorage.getItem("pick_up_time"));

let start_div_fr = document.getElementById("st2_divin");
start_div_fr.innerText = start_city;
let drop_div_fr = document.getElementById("st3_divin");
drop_div_fr.innerText = drop_city;
let pickup_date = document.getElementById("mon_dis");
pickup_date.innerText = pick_dt;
let pickup_time = document.getElementById("dt3_divin");
pickup_time.innerText = `Time: ${pick_ti}`;

let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthss = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let today = new Date();

let full_year = today.getFullYear();

let date_2day = Number(today.getDate());

let Monnt_2day = Number(today.getMonth());

var monVals = 30;

if (
  Monnt_2day === 0 ||
  Monnt_2day === 2 ||
  Monnt_2day === 4 ||
  Monnt_2day === 6 ||
  Monnt_2day === 7 ||
  Monnt_2day === 9 ||
  Monnt_2day === 11
) {
  monVals = 31;
} else if (Monnt_2day === 1) {
  monVals = 28;
} else {
  monVals = monVals;
}
console.log(monVals);

let fr_date_box = document.getElementById("day_frb");
let day_2day = Number(today.getDay());
let res_day = week[day_2day];
if (date_2day > monVals) {
  date_2day = date_2day - monVals;
}
fr_date_box.innerHTML = `<p>${date_2day}</p>${res_day}`;

let sec_date_box = document.getElementById("day_secb");
let day_d2 = Number(today.getDay());
let date_d2 = date_2day + 1;
if (date_d2 > monVals) {
  date_d2 = date_d2 - monVals;
}
day_d2 = (day_d2 + 1) % 7;
let res_day2 = week[day_d2];
sec_date_box.innerHTML = `<p>${date_d2}</p>${res_day2}`;

let th_date_box = document.getElementById("day_thrb");
let day_d3 = Number(today.getDay());
let date_d3 = date_2day + 2;
if (date_d3 > monVals) {
  date_d3 = date_d3 - monVals;
}
day_d3 = (day_d3 + 2) % 7;
let res_day3 = week[day_d3];
th_date_box.innerHTML = `<p>${date_d3}</p>${res_day3}`;

let fo_date_box = document.getElementById("day_fob");
let day_d4 = Number(today.getDay());
let date_d4 = date_2day + 3;
if (date_d4 > monVals) {
  date_d4 = date_d4 - monVals;
}
day_d4 = (day_d4 + 3) % 7;
let res_day4 = week[day_d4];
fo_date_box.innerHTML = `<p>${date_d4}</p>${res_day4}`;

let fif_date_box = document.getElementById("day_fifb");
let day_d5 = Number(today.getDay());
let date_d5 = date_2day + 4;
if (date_d5 > monVals) {
  date_d5 = date_d5 - monVals;
}
day_d5 = (day_d5 + 4) % 7;
let res_day5 = week[day_d5];
fif_date_box.innerHTML = `<p>${date_d5}</p>${res_day5}`;

let si_date_box = document.getElementById("day_sib");
let day_d6 = Number(today.getDay());
let date_d6 = date_2day + 5;
if (date_d6 > monVals) {
  date_d6 = date_d6 - monVals;
}
day_d6 = (day_d6 + 5) % 7;
let res_day6 = week[day_d6];
si_date_box.innerHTML = `<p>${date_d6}</p>${res_day6}`;

let se_date_box = document.getElementById("day_seb");
let day_d7 = Number(today.getDay());
let date_d7 = date_2day + 6;
if (date_d7 > monVals) {
  date_d7 = date_d7 - monVals;
}
day_d7 = (day_d7 + 6) % 7;
let res_day7 = week[day_d7];
se_date_box.innerHTML = `<p>${date_d7}</p>${res_day7}`;

let ei_date_box = document.getElementById("day_eib");
let day_d8 = Number(today.getDay());
let date_d8 = date_2day + 7;
if (date_d8 > monVals) {
  date_d8 = date_d8 - monVals;
}
day_d8 = (day_d8 + 7) % 7;
let res_day8 = week[day_d8];
ei_date_box.innerHTML = `<p>${date_d8}</p>${res_day8}`;

function checkmon(v) {
  let id = v.id;
  let par_mon_div = document.getElementById(id);
  // par_mon_div.style.border="2px solid green"
  let cls = document.querySelectorAll(".month");
  for (let i = 0; i < cls.length; i++) {
    cls[i].style.border = "1px solid black";
    par_mon_div.style.border = "3px solid green";
  }
  let par_mon = document.getElementById(id).innerText;
  let mon_dis = document.getElementById("mon_dis2");
  mon_dis.innerText = par_mon;
}

function checkday(e) {
  let id2 = e.id;
  let par_date_div = document.getElementById(id2);
  let cls = document.querySelectorAll(".day");
  for (let i = 0; i < cls.length; i++) {
    cls[i].style.border = "1px solid black";
    par_date_div.style.border = "3px solid green";
  }
  let par_date = document.getElementById(id2).innerText;
  par_date = par_date.split(/[\r\n]+/);
  let date_dis = document.getElementById("date_dis2");
  date_dis.innerText = par_date[0] + "," + full_year + " " + par_date[1];

  let re2 = document.getElementById("mon_dis2").innerText;
  let re3 = document.getElementById("date_dis2").innerText;

  let re = re2 + re3;
  localStorage.setItem("drop_date", JSON.stringify(re));
}

let months2 = document.getElementById("mon_dis2");
let month_2ch = document.getElementById("mon_frb").innerText;
months2.innerText = month_2ch;
let dates2 = document.getElementById("date_dis2");
let dates_2ch = document.getElementById("day_frb").innerText;
dates_2ch = dates_2ch.split(/[\r\n]+/);
dates2.innerText = dates_2ch[0] + "," + full_year + " " + dates_2ch[1];

let dis_month2 = document.getElementById("mon_dis2").innerText;
let dis_date2 = document.getElementById("date_dis2").innerText;

let res = dis_month2 + dis_date2;
localStorage.setItem("drop_date", JSON.stringify(res));

let time = document.getElementById("timething1");
let latest_time_h = today.getHours();
if (latest_time_h < 10) {
  latest_time_h = 0 + "" + latest_time_h;
} else {
  latest_time_h = latest_time_h;
}

let latest_time_min = today.getMinutes();
if (latest_time_min < 10) {
  latest_time_min = 0 + "" + latest_time_min;
} else {
  latest_time_min = latest_time_min;
}
//   console.log('latest_time_h:', latest_time_h)
// console.log('latest_time_min:', latest_time_min)
time.value = `${latest_time_h}:${latest_time_min}`;

function checkTime() {
  let time_par = document.getElementById("dt33_divin");
  let time_dis = document.getElementById("timething1").value;
  time_par.innerText = `Time: ${time_dis}`;
  let disp_time = time_par.innerText;
  disp_time = disp_time.split(" ");
  disp_time = disp_time[1];
  localStorage.setItem("drop_time", JSON.stringify(disp_time));
}
let time_par = document.getElementById("dt33_divin");
let time_dis = document.getElementById("timething1").value;
time_par.innerText = `Time: ${time_dis}`;

let disp_time = time_par.innerText;
disp_time = disp_time.split(" ");
disp_time = disp_time[1];
localStorage.setItem("drop_time", JSON.stringify(disp_time));

function gotopageBook() {
  window.location.href = "../bookingpage/bookingPage.html";
  // LOCAL STORAGE NAMES //drop_time & //drop_date
}
