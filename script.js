
let displayTime = new Date();
let options = { year: "numeric", month: "short", day: "numeric" };
let showdate = displayTime.toLocaleDateString("en-US", options);
// console.log(showdate);
let showTime = document.querySelector("#displayTime");
showTime.innerText = showdate;

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let input = document.querySelector("#input input").value;

  if(input === "") {
      let displayAlert = new bootstrap.Modal(document.getElementById("exampleModal_2"));
      return displayAlert.show();
  }
  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=79364771e780491bad7105137243006&q=${input}`)
    .then(function (response) {
      console.log(response);
      const name = response.data.location.name;
      let loc = document.querySelector("#location");
      loc.innerText = name;
      let temp = response.data.current.temp_c;
      temp = Math.round(temp);

      let tempget = document.querySelector("#temp");
      tempget.innerHTML = `${temp}<sup>o</sup>C `;
      let wind = response.data.current.wind_kph;
      wind = Math.round(wind);
      let displaywind = document.querySelector("#wind");
      displaywind.innerText = `${wind} kp/h`;

      let displayhumadity = document.querySelector("#displayHumadity");
      let humidity = response.data.current.humidity;
      displayhumadity.innerText = humidity;

      let dewpoint = document.querySelector("#dewpoint");
      let displaydewpoint = response.data.current.dewpoint_c;
      dewpoint.innerText = displaydewpoint;

      let precip = document.querySelector("#precip_mm");
      let displayprecip = response.data.current.precip_in;
      precip.innerText = displayprecip;

      let pressure = document.querySelector("#pressure");
      let displaypressure = response.data.current.pressure_in;
      pressure.innerText = displaypressure;

      let feelslike = document.querySelector("#feelslike");
      let displayFeelslike = response.data.current.feelslike_c;
      feelslike.innerText = displayFeelslike;

      let heatindex = document.querySelector("#heatindex");
      let displayHeatindex = response.data.current.heatindex_c;
      heatindex.innerText = displayHeatindex;

      let cloudorSun = response.data.current.condition.text;
      let sunny = document.querySelector("#sunny");
      sunny.innerText = cloudorSun;

      let displayCloud = document.querySelector("#displayCloud");
      let showCloud = response.data.current.cloud;
      displayCloud.innerText = showCloud;
      
      let displayVisMiles = document.querySelector("#displayVis");
      let showVisMiles = response.data.current.vis_miles;
      displayVisMiles.innerText = showVisMiles;

      let isDay = document.querySelector("#dayOrNight");
      let displayDay = response.data.current.is_day;
      displayDay === 1 ? (isDay.innerText = "Day") : (isDay.innerText = "Night");
    })
    .catch(function (error) {
      let displayError = new bootstrap.Modal(document.getElementById("exampleModal"));
      displayError.show();
    });
});
