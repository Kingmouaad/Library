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
const createbutton = document.querySelectorAll(".create");
createbutton.forEach((btn) =>
  btn.addEventListener("click", () => {
    mainform.setAttribute("style", "display:flex;");
    container.style.filter = "blur(5px)";
  })
);
const cancel = document.querySelector("#Cancel");
cancel.addEventListener("click", () => {
  mainform.setAttribute("style", "display:none;");
  container.style.filter = "none";
});
const form = document.querySelector("form");
const mainform = document.querySelector(".form");
const forthdiv = document.querySelector(".forth");
let books = [];
let forthdivarray = [];
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

  // forthdiv.firstElementChild === "svg"
  if (books.length === 0 && forthdiv.children.length > 0) {
    for (let i = 0; i < 4; i++) {
      forthdivarray.push(forthdiv.removeChild(forthdiv.firstElementChild));
    }
  }
  // if (forthdiv.firstElementChild === null){
  //   forthdiv.appendChild(forthdivarray.shift())
  // forthdiv.setAttribute("style","justify-content: center;align-items: center;flex-direction: column;")
  // }
  forthdiv.style.display = "grid";
  forthdiv.style.backgroundColor = "#8c3e0d";
  forthdiv.style.boxShadow = "inset 0 0 10px rgba(0,0,0,0.5)";
  forthdiv.style.justifyContent = "start";
  forthdiv.style.alignItems = "end";
  forthdiv.style.gridTemplateColumns = "repeat(11,100px)";
  forthdiv.style.gridAutoRows = "200px";
  forthdiv.style.gap = "1px";
  const cover = document.createElement("div");
  cover.style.backgroundColor = `rgb(${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 255})`;
  cover.classList.add("cover");
  cover.style.width = `${Math.random() * 200}px`;
  cover.style.height = `${Math.random() * 55}px`;
  const cont = document.createElement("div");
  cont.classList.add("cont");
  cont.textContent = newbook.title;

  const popup = document.createElement("div");
  popup.classList.add("hover");
  popup.innerHTML = `
    <h3>${newbook.title}</h3>
    <p>by ${newbook.author}</p>
    <p>${newbook.type} • ${newbook.pages} pages</p>
    <p>Year: ${newbook.year}</p>
    <button class="delete-btn">🗑</button>
  `;

  // Add event listeners
  cover.addEventListener("mouseenter", () => {
    popup.style.display = "block";
  });

  cover.addEventListener("mouseleave", () => {
    popup.style.display = "none";
  });

  // Delete functionality
  popup.querySelector(".delete-btn").addEventListener("click", () => {
    cover.remove();
    books = books.filter((book) => book !== cover);
  });
  popup.classList.add("hover");

  cover.appendChild(cont);
  cover.appendChild(popup);
  forthdiv.appendChild(cover);
  books.push(cover);
  form.reset();
});
const cover = document.querySelector(".cover");
cover.addEventListener("mouseover", () => {
  cover.style.display = "grid";
});
