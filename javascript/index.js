function updateTime(){
  
    //Dubai
  let dubaiElement = document.querySelector("#Dubai");
  if (dubaiElement){
let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format(
    "h:mm:ss [<small>]A[<small>] "
  );
  }
  

  //New York
  let newYorkElement = document.querySelector("#NewYork");
  if (newYorkElement){
let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[<small>] "
  );

  }
  

  //London
  let londonElement = document.querySelector("#London");
  if (londonElement){
let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[<small>] "
  );


  }
  
  //Paris
  let parisElement = document.querySelector("#Paris");
  if (parisElement){

let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[<small>] ");
  }
  

  //Tokyo
  let tokyoElement = document.querySelector("#Tokyo");
  if (tokyoElement){
 let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[<small>] ");

  }
 
}

function updateCity(event){
    let cityTimeZone=event.target.value;
    if (cityTimeZone==="current"){
        cityTimeZone=moment.tz.guess();
    }
    let cityName=cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#selectionOutput");
    citiesElement.innerHTML = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <a href="index.html">🏠HOME-All Cities<a/>
    <br>
    <br>
    <br>
    <br>
    <div class="city">
            <div>
                <h2>
                    ${cityName}
                </h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "hh:mm"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
        <div> <marquee> <font size="15"> 🎄🎄🎄🎄🎄🎄🎅🤶🎄 <font color=red>  M E R R Y 💗💗 C H R I S T M A S </font> 🎄🎅🤶🎄🎄🎄🎄🎄🎄 WELCOME 2025!</font> </font> </marquee>  </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
    
    `;


    
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement=document.querySelector("#cityOptions");
citiesSelectElement.addEventListener("change",updateCity);

updateCity();
setInterval(updateCity, 1000);
