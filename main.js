// Close & Open modal window.
const btnOfModal = document.querySelectorAll(".header-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelectorAll(".close-btn");

for (button of btnOfModal) {
  button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
  });
}

for (button of closeBtn) {
  button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
  });
}

// slider

let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-prev").addEventListener("click", () => {
  offset -= 528;
  if (offset < 0) {
    offset = 528 * 2;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-next").addEventListener("click", () => {
  offset += 528;
  if (offset > 528 * 2) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
