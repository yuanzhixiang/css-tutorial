const inset = document.querySelector(".inset");
const ranges = document.querySelectorAll('input[type="range"]');

ranges.forEach((range) => {
  range.addEventListener("change", (etv) => {
    inset.style.setProperty(`--${etv.target.id}`, `${etv.target.value}px`);
    document.querySelector(
      `.output-${etv.target.id}`
    ).textContent = `${etv.target.value}px`;
    document.querySelector(
      `.${etv.target.id}`
    ).textContent = `${etv.target.value}px`;
  });
});
