// let targateLocation = "new york";
const feathchresult = async (targateLocation) => {
  let url = YOUR_API_KEY;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  if (data.error) {
    alert("City not found!");
    return;
  }

  let [locatioName, temp, humidity, windSpeed, weatherCondition] = [
    data.location.name,
    data.current.temp_c,
    data.current.humidity,
    data.current.wind_kph,
    data.current.condition.text,
  ];
  console.log(weatherCondition);

  document.querySelector(".temp").innerHTML = `${temp}<sup>°</sup>C`;
  document.querySelector(".state").innerHTML = locatioName;
  document.querySelector(".humidity").innerHTML = `${humidity}%`;
  document.querySelector(".windSpeed").innerHTML = `${Math.round(
    windSpeed
  )} kmph`;

  let conditionLower = weatherCondition.toLowerCase();

  if (conditionLower.includes("drizzle")) {
    weatherIcon.src = "/images/drizzle.png";
  } else if (conditionLower.includes("mist")) {
    weatherIcon.src = "/images/mist.png";
  } else if (
    conditionLower.includes("sunny") ||
    conditionLower.includes("clear")
  ) {
    weatherIcon.src = "/images/clear.png";
  } else if (conditionLower.includes("snow")) {
    weatherIcon.src = "/images/snow.png";
  } else if (conditionLower.includes("cloud")) {
    weatherIcon.src = "/images/clouds.png";
  } else if (conditionLower.includes("rain")) {
    weatherIcon.src = "/images/rain.png";
  } else {
    weatherIcon.src = "/images/clouds.png";
  }
};

// feathchresult();

// Common search handler
const handleSearch = () => {
  let city = searchInput.value.trim();
  if (city) {
    feathchresult(city);
  } else {
    alert("Please Enter City Name");
  }
};

let searchInput = document.querySelector(".input_field input");
let searchBtn = document.querySelector(".input_field button");
let weatherIcon = document.querySelector(".tempImage");

// Click event
searchBtn.addEventListener("click", handleSearch);

// Enter key event
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});
