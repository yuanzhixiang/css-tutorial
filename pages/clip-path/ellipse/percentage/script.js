const ellipse = document.querySelector(".ellipse");
const ranges = document.querySelectorAll('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener("click", (etv) => {
  if (checkbox.checked) {
    ellipse.style.setProperty(`--position-x`, `50%`);
    ellipse.style.setProperty(`--position-y`, `50%`);
    document.querySelector(".output-position-x").textContent = `50%`;
    document.querySelector(".output-position-y").textContent = `50%`;

    ranges.forEach((range) => {
      range.removeAttribute("disabled");
    });
  } else {
    ellipse.style.setProperty(`--position-x`, `0%`);
    ellipse.style.setProperty(`--position-y`, `0%`);
    document.querySelector(".output-position-x").textContent = `0%`;
    document.querySelector(".output-position-y").textContent = `0%`;
    document.querySelector("#position-x").disabled = true;
    document.querySelector("#position-y").disabled = true;
  }
});

ranges.forEach((range) => {
  range.addEventListener("change", (etv) => {
    const id = etv.target.id;
    const value = etv.target.value;
    let unit = "px";
    if (id === "rx" || id === "ry" || id === "position-x" || id === "position-y") {
      unit = "%";
    }
    ellipse.style.setProperty(`--${id}`, `${value}${unit}`);
    document.querySelector(`.output-${id}`).textContent = `${value}${unit}`;
  });
});
