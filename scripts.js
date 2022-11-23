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
