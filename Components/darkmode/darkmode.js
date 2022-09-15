console.clear();

const darkModeSwitch = document.querySelector("[data-js='darkmode-switch']");
const body = document.querySelector("[data-js='body']");

const darkModeSwithFunction = () => {
  body.classList.toggle("darkmode__screen");
};

darkModeSwitch.addEventListener("click", () => {});

console.log(body);
