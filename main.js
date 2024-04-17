// Close & Open modal window.
const btnOfModal = document.querySelectorAll(".header-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelectorAll(".close-btn");

// for (button of btnOfModal) {
//   button.addEventListener("click", () => {
//     modal.classList.toggle("is-open");
//   });
// }

btnOfModal.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
  });
});

for (button of closeBtn) {
  button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
  });
}

// Slider
const sliderLine = document.querySelector(".slider-line");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
let offset = 0;

sliderPrev.addEventListener("click", () => {
  offset -= 528;
  if (offset < 0) {
    offset = 528 * 2;
  }
  return (sliderLine.style.left = -offset + "px");
});

sliderNext.addEventListener("click", () => {
  offset += 528;
  if (offset > 528 * 2) {
    offset = 0;
  }
  return (sliderLine.style.left = -offset + "px");
});
