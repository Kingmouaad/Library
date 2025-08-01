const body = document.querySelector("body");
const container = document.querySelector(".container");
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
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const year = document.querySelector("#year");
const type = document.querySelector("#type");
function Book(title, author, pages, year, type) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.type = type;
  this.info = function () {
    return `${this.type} - ${this.year} - ${this.pages}pages`;
  };
}
const createbutton = document.querySelector(".create");
createbutton.addEventListener("click", () => {
  mainform.setAttribute("style", "display:flex;");
  container.style.filter = "blur(5px)";
});
const cancel = document.querySelector("#Cancel");
cancel.addEventListener("click", () => {
  mainform.setAttribute("style", "display:none;");
  container.style.filter = "none";
});
const form = document.querySelector("form");
const mainform = document.querySelector(".form");
const forthdiv = document.querySelector(".forth");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newbook = new Book(
    title.value,
    author.value,
    pages.value,
    year.value,
    type.value
  );
  mainform.style.display = "none";
  container.style.filter = "none";
  if (forthdiv.firstElementChild === "svg") {
    for (let i = 0; i < 3; i++) {
      forthdiv.removeChild(forthdiv.firstChild);
    }
  }
  const cover = document.createElement(div);
});
