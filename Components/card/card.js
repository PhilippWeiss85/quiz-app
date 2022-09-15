function createCard(question, answer, tag) {
  const quizcardSection = document.createElement("section");
  quizcardSection.classList.add("quiz-card");

  quizcardSection.innerHTML = `
  <img
          class="quiz-card__bookmark"
          src="/Images/bookmark.svg"
          alt="Bookmark this Question"
          data-js="quiz-card__bookmark"
        />
        <h2 data-js="quizcard-question"></h2>
        <button data-js="showanswer-button" class="button__show-answer">
          Show answer
        </button>
        <article class="article--hidden"  data-js="quizcard-answer">
          <p class="quiz-card__answer" data-js="quizcard-answer-p">
          </p>
        </article>
        <ul class="quiz-card__list">
          <li class="quiz-card__tag" data-js="quizcard-listitem"></li>
        </ul>`;

  quizcardSection.querySelector('[data-js="quizcard-question"]').textContent = question;
  quizcardSection.querySelector('[data-js="quizcard-answer-p"]').textContent = answer;
  quizcardSection.querySelector('[data-js="quizcard-listitem"]').textContent = `#${tag}`;

  console.log(question);
  console.log(answer);
  console.log(tag);

  const bookmarkIcon = quizcardSection.querySelector('[data-js="quiz-card__bookmark"]');
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("quiz-card__bookmark--solid");
  });

  const showAnswerButton = quizcardSection.querySelector('[data-js="showanswer-button"]');
  const answerArticle = quizcardSection.querySelector('[data-js="quizcard-answer"]');

  showAnswerButton.addEventListener("click", () => {
    answerArticle.classList.toggle("article--show");

    if (answerArticle.classList.contains("article--hidden")) {
      showAnswerButton.textContent = "Hide answer";
      answerArticle.classList.remove("article--hidden");
    } else {
      answerArticle.classList.add("article--hidden");
      showAnswerButton.textContent = "Show answer";
    }
  });

  return quizcardSection;
}

export { createCard };
