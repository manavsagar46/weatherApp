
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

  let [locatioName, temp, humidity, windSpeed] = [
    data.location.name,
    data.current.temp_c,
    data.current.humidity,
    data.current.wind_kph,
  ];

  document.querySelector(".temp").innerHTML = `${temp}<sup>°</sup>C`;
  document.querySelector(".state").innerHTML = locatioName;
  document.querySelector(".humidity").innerHTML = `${humidity}%`;
  document.querySelector(".windSpeed").innerHTML = `${Math.round(
    windSpeed
  )} kmph`;
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

// Click event
searchBtn.addEventListener("click", handleSearch);

// Enter key event
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});
