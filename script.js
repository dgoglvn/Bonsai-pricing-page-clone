const toggleEl = document.querySelector(".toggle");
const accordionEl = document.getElementsByClassName("accordion");

// Convert to array with Array.from()
Array.from(accordionEl).forEach((element) => {
  element.addEventListener("click", () => {
    element.children[1].classList.toggle("active");
  });
});

function monthlyOrYearly() {
  if (toggleEl.classList.contains("active")) {
    document.querySelector(".pricing-yearly").style.display = "flex";
    document.querySelector(".pricing-monthly").style.display = "none";
  } else {
    document.querySelector(".pricing-yearly").style.display = "none";
    document.querySelector(".pricing-monthly").style.display = "flex";
  }
}

function animatedToggle() {
  toggleEl.classList.toggle("active");

  document.querySelector(".yearly-text").classList.toggle("low-opacity");
  document.querySelector(".monthly-text").classList.toggle("low-opacity");

  monthlyOrYearly();
}
