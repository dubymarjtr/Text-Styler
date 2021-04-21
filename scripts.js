const p = document.createElement("p");
p.innerText = "This is your text";
document.body.appendChild(p);
const root = document.querySelector(":root");
const sizer = document.querySelector('input[type="range"]');

// querying the form
const minForm = document.querySelector("#min-form");
const maxForm = document.querySelector("#max-form");
const min = document.querySelector("#min-size");
const max = document.querySelector("#max-size");

document.querySelector("#input-text").addEventListener("keyup", (event) => {
  p.innerText = event.target.value;
});

document
  .querySelector('input[type="range"]')
  .addEventListener("input", (event) => {
    root.style.setProperty("--font-size", `${event.target.value}px`);
  });

document
  .querySelector('input[type="color"]')
  .addEventListener("input", (event) => {
    root.style.setProperty("--font-color", `${event.target.value}`);
  });

minForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const minValue = min.value;
  sizer.min = minValue;
});

maxForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const maxValue = max.value;
  sizer.max = maxValue;
});
