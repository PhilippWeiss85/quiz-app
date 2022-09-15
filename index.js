const bookmarkIcon = document.querySelector('[data-js="quiz-card__bookmark"]');
const showAnswerButton = document.querySelector(
  '[data-js="showanswer-button"]'
);
const answerText = document.querySelector('[data-js="answertext"]');

bookmarkIcon.addEventListener("click", () => {
  console.log("hello world");
  bookmarkIcon.classList.toggle("quiz-card__bookmark--solid");
});

showAnswerButton.addEventListener("click", () => {
  const showText = answerText;
  answerText.classList.toggle("article--show");

  console.log(showAnswerButton.className);

  if (showAnswerButton.className == "button__show-answer") {
    showAnswerButton.textContent = "Hide answer";
    showAnswerButton.classList.remove("button__show-answer");
  } else showAnswerButton.textContent = "Show answer";
});
