//_Accordion-1:
const ACCORDION_1 = document.querySelector(".accordion-1");
const ACCORDION_1_QUESTIONs = ACCORDION_1.querySelectorAll(
  ".accordion-1__item-question"
);

ACCORDION_1_QUESTIONs.forEach((q) => {
  q.addEventListener("click", function (e) {
    const question = e.currentTarget;
    const block = question.parentNode;
    const answer = block.querySelector(".accordion-1__item-answer");

    if (!block.classList.contains("active")) {
      ACCORDION_1.querySelectorAll(".accordion-1__item").forEach((ac) => {
        ac.classList.remove("active");
        ac.querySelector(".accordion-1__item-answer").style.maxHeight = 0;
      });
      block.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      block.classList.remove("active");
      answer.style.maxHeight = 0;
    }
  });
});

//_Accordion-2:
const ACCORDION_2 = document.querySelector(".accordion-2");
const ACCORDION_2_QUESTIONs = ACCORDION_2.querySelectorAll(
  ".accordion-2__question"
);

ACCORDION_2_QUESTIONs.forEach((question) => {
  question.addEventListener("click", (e) => {
    const currentQuestion = e.currentTarget;
    const currentItem = currentQuestion.parentNode;
    const currentAnswer = currentQuestion.nextElementSibling;

    ACCORDION_2.querySelectorAll(".accordion-2__item").forEach((item) => {
      item.classList.remove("active");
    });
    ACCORDION_2.querySelectorAll(".accordion-2__answer").forEach((answer) => {
      answer.style.maxHeight = 0;
    });

    if (!currentItem.classList.contains("active")) {
      currentItem.classList.add("active");
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
    } else {
      currentItem.classList.remove("active");
      currentAnswer.style.maxHeight = 0;
    }
  });
});
