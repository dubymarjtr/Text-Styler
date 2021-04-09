const p = document.querySelector("p");
const root = document.querySelector(":root");

document
  .querySelector('input[type="text"]')
  .addEventListener("keyup", (event) => {
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
