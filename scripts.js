const p = document.querySelector("p");

document
  .querySelector('input[type="text"]')
  .addEventListener("keyup", (event) => {
    p.innerText = event.target.value;
  });
