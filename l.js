const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 10; i++) {
    let random1 = Math.random() * 100;
    let random2 = Math.random() * 100;
    let random3 = Math.random() * 4;
    let random4 = Math.random() * 10;
    const newsmall = document.createElement("div");
    newsmall.classList.add("small");
    newsmall.style.left = `${random1}%`;
    newsmall.style.top = `${random2}%`;
    newsmall.style.animationDuration = `${random4}s`;
    newsmall.style.animationDelay = `${random3}s`;
    body.appendChild(newsmall);
  }
});
