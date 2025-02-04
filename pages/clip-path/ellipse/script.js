const ellipse = document.querySelector(".ellipse");
const ranges = document.querySelectorAll('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener("click", (etv) => {
  if (checkbox.checked) {
    ellipse.style.setProperty(`--position-x`, `50px`);
    ellipse.style.setProperty(`--position-y`, `50px`);
    document.querySelector(".output-position-x").textContent = `50px`;
    document.querySelector(".output-position-y").textContent = `50px`;

    ranges.forEach((range) => {
      range.removeAttribute("disabled");
    });
  } else {
    ellipse.style.setProperty(`--position-x`, `0px`);
    ellipse.style.setProperty(`--position-y`, `0px`);
    document.querySelector(".output-position-x").textContent = `0px`;
    document.querySelector(".output-position-y").textContent = `0px`;
    document.querySelector("#position-x").disabled = true;
    document.querySelector("#position-y").disabled = true;
  }
});

ranges.forEach((range) => {
  range.addEventListener("change", (etv) => {
    ellipse.style.setProperty(`--${etv.target.id}`, `${etv.target.value}px`);
    document.querySelector(
      `.output-${etv.target.id}`
    ).textContent = `${etv.target.value}px`;
  });
});
