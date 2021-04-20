const p = document.querySelector("p");
const root = document.querySelector(":root");

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

document.querySelector("#min-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const valueMin = document.querySelector("#min-size").value;
  document.querySelector('input[type="range"]').min = valueMin;
});

document.querySelector("#max-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const valueMax = document.querySelector("#max-size").value;
  document.querySelector('input[type="range"]').max = valueMax;
});
