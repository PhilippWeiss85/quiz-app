import { createCard } from "./Components/card/card.js";

const mainContent = document.querySelector('[data-js="main-content"]');
const card = document.querySelector('[data-js="card"]');

card.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data", data);
  console.log("formdata", formData);
  console.log("event target", event.target);

  const newCard = createCard(data.formquestion, data.formanswer, data.formtag);
  console.log("data", data);
  mainContent.append(newCard);
});

const questionInput = document.querySelector('[data-js="formquestion-js"]');
const answerInput = document.querySelector('[data-js="formanswer-js"]');
const tagInput = document.querySelector('[data-js="formtag-js"]');
const questionCounter = document.querySelector('[data-js="formquestion-counter-js"]');
const answerCounter = document.querySelector('[data-js="formanswer-counter-js"]');
const tagCounter = document.querySelector('[data-js="formtag-counter-js"]');

function inputCounter(element, elementCounter) {
  const maxLength = parseInt(element.getAttribute("maxlength"));
  element.addEventListener("input", () => {
    const length = element.value.length;
    const remainingCharacters = maxLength - length;
    const maxLengthBar = remainingCharacters / 2 + "%";
    elementCounter.textContent = `${remainingCharacters} characters left`;
    if (remainingCharacters === 0) {
      elementCounter.style.backgroundColor = "red";
    } else {
      elementCounter.style.backgroundColor = "green";
    }

    elementCounter.style.width = maxLengthBar;
    // hier muss etwas rein, dass die leiste reduziert ausgehend von den verbleibenden characters
  });
}

inputCounter(questionInput, questionCounter);
inputCounter(answerInput, answerCounter);
inputCounter(tagInput, tagCounter);
