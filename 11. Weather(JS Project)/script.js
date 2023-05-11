//Initializing all element constants
const temperatureFeild = document.querySelector(".weather1");
const cityFeild = document.querySelector(".weather2 p");
const dataFeild = document.querySelector(".weather2 span");
const emojiFeild = document.querySelector(".weather3 img");
const weatherFeild = document.querySelector(".weather3 span");
const searchFeild = document.querySelector(".searchFeild");
const form = document.querySelector("form");

//Adding event Listner to the form
form.addEventListener("submit", search);

//Default location
let target = "Mumbai";

//Function to fetach Data from weather API
const fetchData = async (target) => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=3951f5329b744f5cacc145722231105&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    //Destructuring
    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    //Calling update Dom function
    updateDom(temp_c, name, localtime, icon, text);
  } catch (error) {
    alert("Location not found");
  }
};

//Funtion to update Dom
function updateDom(tempearture, city, time, emoji, text) {
  const exactTime = time.split(" ")[1];
  const exactDate = time.split(" ")[0];
  const exactDay = getDayFullName(new Date(exactDate).getDay());

  temperatureFeild.innerText = tempearture;
  cityFeild.innerText = city;

  dataFeild.innerText = `${exactTime} - ${exactDay} ${exactDate}`;

  emojiFeild.src = emoji;
  weatherFeild.innerText = text;
}

fetchData(target);

//function to search the location
function search(e) {
  e.preventDefault();
  target = searchFeild.value;
  fetchData(target);
}

//Function to get name of day
function getDayFullName(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Don't Know";
  }
}
