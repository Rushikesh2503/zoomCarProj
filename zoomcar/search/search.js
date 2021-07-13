  //Getting home page current city
  let city = JSON.parse(localStorage.getItem("city"));
  let your_city = (document.getElementById("city_sub").value = city);
  let parent = document.getElementById("input_sel_st");
  parent.placeholder = `Tell us your starting point in ${your_city}`;

  var parent2 = document.getElementById("popular_pick");
  var parent_diff_city = document.getElementById("sel_start2");

  //if we change current city
  var st_loc = document.getElementById("city_sub").value;
  function checkC() {
    var start_loc = document.getElementById("city_sub").value;
    if (start_loc == "Mumbai") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                              <p >Kandivali West</p>
                              <p>Thane</p>
                              <p>Kharghar</p>
                              <p>Andheri West</p>
                              <p>Vashi</p>
                              `;
      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Ahmedabad">Ahmedabad</option>
             <option value="Nagpur">Nagpur</option>
             <option value="Pune">Pune</option>
             <option value="Vadodara">Vadodara</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Bangalore") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Indiranagar</p>
                         <p>Koramangala</p>
                         <p>Rajajinagar</p>
                         <p>Magrath Road</p>
                         <p>Yeshwantpur</p>`;

      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Chennai">Chennai</option>
             <option value="Hyderabad">Hyderabad</option>
             <option value="Mysore">Mysore</option>
             <option value="Udupi-Manipal">Udupi-Manipal</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Chennai") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;

      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Thuraipakkam</p>
                         <p>Nelson </p>
                         <p>Kodambakkam</p>
                         <p>Porur</p>`;

      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Bangalore">Bangalore</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Chandigarh") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Sector 10</p>
                         <p>Sector 17</p>
                         <p>Panchkula</p>
                         <p>Mohali</p>`;

      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Delhi">Delhi</option>
             <option value="Jaipur">Jaipur</option>
             <option value="Lucknow">Lucknow</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Delhi") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Mahipalpur</p>
                         <p>East of Kailash</p>
                         <p>Laxmi Nagar</p>
                         <p>Gurgaon</p>`;
      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Chandigarh">Chandigarh</option>
             <option value="Jaipur">Jaipur</option>
             <option value="Lucknow">Lucknow</option>
             <option value="Patna">Patna</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Hyderabad") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Madhapur</p>
                         <p>Gachibowli</p>
                         <p>Kothapet</p>
                         <p>HITEC City</p>`;
      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Bangalore">Bangalore</option>
             <option value="Vijaywada">Vijaywada</option>
             <option value="Vizag">Vizag</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Kolkata") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Salt Lake</p>
                         <p>New Alipore</p>
                         <p>Ballygunge</p>
                         <p>Tollygunge</p>`;
      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Bhubaneswar">Bhubaneswar</option>
             <option value="Patna">Patna</option>
             <option value="Siliguri">Siliguri</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else if (start_loc == "Pune") {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Aundh</p>
                         <p>Hinjewadi</p>
                         <p>Kothrud</p>
                         <p>Rasta Peth</p>`;
      parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Ahmedabad">Ahmedabad</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Nagpur">Nagpur</option>
             <option value="Vadodara">Vadodara</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in your City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
    } else {
      parent.placeholder = `Tell us your starting point in ${start_loc}`;
      parent2.innerHTML = "";
    }
  }

  //if we dont change current city same as homepage city
  if (your_city == "Mumbai") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                              <p>Kandivali West</p>
                              <p>Thane</p>
                              <p>Kharghar</p>
                              <p>Andheri West</p>
                              <p>Vashi</p>
                              `;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Ahmedabad">Ahmedabad</option>
             <option value="Nagpur">Nagpur</option>
             <option value="Pune">Pune</option>
             <option value="Vadodara">Vadodara</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Mumbai"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Bangalore") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Indiranagar</p>
                         <p>Koramangala</p>
                         <p>Rajajinagar</p>
                         <p>Magrath Road</p>
                         <p>Yeshwantpur</p>`;

    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Chennai">Chennai</option>
             <option value="Hyderabad">Hyderabad</option>
             <option value="Mysore">Mysore</option>
             <option value="Udupi-Manipal">Udupi-Manipal</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Bangalore"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Chennai") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Thuraipakkam</p>
                         <p>Nelson </p>
                         <p>Kodambakkam</p>
                         <p>Porur</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
            <option value="Bangalore">Bangalore</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Chennai"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Chandigarh") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Sector 10</p>
                         <p>Sector 17</p>
                         <p>Panchkula</p>
                         <p>Mohali</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Delhi">Delhi</option>
             <option value="Jaipur">Jaipur</option>
             <option value="Lucknow">Lucknow</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Chandigarh"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Delhi") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Mahipalpur</p>
                         <p>East of Kailash</p>
                         <p>Laxmi Nagar</p>
                         <p>Gurgaon</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Chandigarh">Chandigarh</option>
             <option value="Jaipur">Jaipur</option>
             <option value="Lucknow">Lucknow</option>
             <option value="Patna">Patna</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Delhi"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Hyderabad") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Madhapur</p>
                         <p>Gachibowli</p>
                         <p>Kothapet</p>
                         <p>HITEC City</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Bangalore">Bangalore</option>
             <option value="Vijaywada">Vijaywada</option>
             <option value="Vizag">Vizag</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Hydrabad"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Kolkata") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Salt Lake</p>
                         <p>New Alipore</p>
                         <p>Ballygunge</p>
                         <p>Tollygunge</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Bhubaneswar">Bhubaneswar</option>
             <option value="Patna">Patna</option>
             <option value="Siliguri">Siliguri</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Kolkata"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else if (your_city == "Pune") {
    parent2.innerHTML = `<p>POPULAR PICK_UP POINTS</p>
                         <p>Aundh</p>
                         <p>Hinjewadi</p>
                         <p>Kothrud</p>
                         <p>Rasta Peth</p>`;
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Ahmedabad">Ahmedabad</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Nagpur">Nagpur</option>
             <option value="Vadodara">Vadodara</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point near Pune"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  } else {
    parent2.innerHTML = "";
  }

  let dCity = document.getElementById("diff_city_check");

  /* let parent_diff_city = document.getElementById("sel_start2");
  let diff_sel_city = document.getElementById("city_sub").value;
  console.log("diff_sel_city:", diff_sel_city);

  if (start_loc == "Mumbai") {
    parent_diff_city.innerHTML = `<div id="city_sel2">
           <select name="city" id="city_sub2" onchange="checkCh2()">
             <option value="Ahmedabad">Ahmedabad</option>
             <option value="Nagpur">Nagpur</option>
             <option value="Pune">Pune</option>
             <option value="Vadodara">Vadodara</option>
           </select>
         </div>
         <div id="sele_st_loca2">
           <input
             type="text"
             placeholder="Tell us your starting point in City"
             id="input_sel_st2"
           />
         </div>
         <button id="locate_btn2">
           <div class="div_locate2">
             <img
               src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
               alt=""
             />
             <div class="locate_par2">Locate me</div>
           </div>
         </button>
         <button id="showmap_btn2"><a href="">show map</a></button>
       </div>`;
  }*/

  function divappend() {
    if (dCity.checked == true) {
      let popu_pick = document.getElementById("popular_pick");
      popu_pick.style.display = "none";
      let sele_diff_city = document.getElementById("sel_start2");
      sele_diff_city.style.display = "flex";
      let deta_Airport = document.getElementById("deta_Airport");
      deta_Airport.style.marginTop = "35vh";
      let input_sel_diff_city = document.getElementById("input_sel_st2");
      input_sel_diff_city.addEventListener("change", checknextbtn2);
      let next_btn = document.getElementById("next_btn");
      next_btn.style.backgroundColor = "rgb(155, 155, 155)";
      next_btn.addEventListener("click", checknextbtn2);
    } else if (dCity.checked == false) {
      let sele_diff_city = document.getElementById("sel_start2");
      sele_diff_city.style.display = "none";
      let popu_pick = document.getElementById("popular_pick");
      popu_pick.style.display = "block";
      let deta_Airport2 = document.getElementById("deta_Airport");
      deta_Airport2.style.marginTop = "17vh";
    }
  }
  function checknextbtn() {
    let inputGiven1 = document.getElementById("input_sel_st").value;
    // console.log("inputGiven:", inputGiven);
    let next_btn = document.getElementById("next_btn");

    let footer_div1_2 = document.getElementById("st2_divin");

    if (inputGiven1 != "") {
      next_btn.style.backgroundColor = "greenyellow";
      next_btn.addEventListener("click", nextpage_s2);
      footer_div1_2.innerText = inputGiven1;
    }
    if (inputGiven1 == "") {
      next_btn.style.backgroundColor = "rgb(155, 155, 155)";
      next_btn.addEventListener("click", notnextpg);
      window.location.href = "search.html";
    }
  }
  //button for work
  function checknextbtn2() {
    let inputGiven1 = document.getElementById("input_sel_st").value;
    let inputGiven2 = document.getElementById("input_sel_st2").value;
    // console.log("inputGiven:", inputGiven);
    let next_btn = document.getElementById("next_btn");
    let footer_div1_2 = document.getElementById("st2_divin");
    let footer_div1_3 = document.getElementById("st3_divin");

    if (inputGiven1 != "" && inputGiven2 != "") {
      footer_div1_2.innerText = inputGiven1;
      footer_div1_3.innerText = inputGiven2;
      next_btn.style.backgroundColor = "greenyellow";
      next_btn.addEventListener("click", nextpage_s2);
    }
    if (inputGiven1 == "" && inputGiven2 != "") {
      next_btn.style.backgroundColor = "rgb(155, 155, 155)";
      next_btn.addEventListener("click", notnextpg);
      window.location.href = "search.html";
    }
  }

  function nextpage_s2() {
    let start_loc_local = document.getElementById("st2_divin").innerText;
    localStorage.setItem("start_city_name", JSON.stringify(start_loc_local));
    let drop_loc_local = document.getElementById("st3_divin").innerText;
    localStorage.setItem("drop_city_name", JSON.stringify(drop_loc_local));
    let sel_radiobox1 = document.querySelector(".sel_radiobox1");
    console.log("sel_radiobox1:", sel_radiobox1);
    sel_radiobox1.style.backgroundColor = "green";
    window.location.href = "../pickupTime/pickupTime.html";
  }
  function notnextpg() {
    window.location.href = "search.html";
  }

  //if we change diff drop city
  var st_loc22 = document.getElementById("city_sub2").value;

  let parent_dc = document.getElementById("input_sel_st2");

  parent_dc.placeholder = `Tell us your starting point in your City`;
  function checkCh2() {
    let your_city22 = document.getElementById("city_sub2").value;
    console.log("your_city22:", your_city22);

    let parent_dc = document.getElementById("input_sel_st2");

    parent_dc.placeholder = `Tell us your starting point in ${your_city22}`;

    var start_loc22 = document.getElementById("city_sub2").value;

    if (start_loc22 == "Mumbai") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Bangalore") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Chennai") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Chandigarh") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Delhi") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Hyderabad") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Kolkata") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else if (start_loc22 == "Pune") {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    } else {
      parent_dc.placeholder = `Tell us your starting point in ${start_loc22}`;
    }
  }
