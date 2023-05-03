const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "#fc0303";
      break;

    case "tarus":
      body.style.backgroundColor = "#03fc6f";
      break;

    case "gemini":
      body.style.backgroundColor = "#fce514";
      break;

    case "cancer":
      body.style.backgroundColor = "#a37a29";
      break;

    case "leo":
      body.style.backgroundColor = "#a142f5";
      break;

    case "virgo":
      body.style.backgroundColor = "#7dc23c";
      break;

    case "libra":
      body.style.backgroundColor = "#e8761e";
      break;

    case "scorpio":
      body.style.backgroundColor = "#c1d10a";
      break;

    case "sagittarius":
      body.style.backgroundColor = "#994ead";
      break;

    case "aquarius":
      body.style.backgroundColor = "#eb8d57";
      break;

    case "capricorn":
      body.style.backgroundColor = "#579eeb";
      break;

    case "pisces":
      body.style.backgroundColor = "#fc88d8";
      break;

    default:
      body.style.backgroundColor = "#fff";

      break;
  }
};
