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
const search = document.querySelector("#search");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const year = document.querySelector("#year");
const type = document.querySelector("#type");
const volume = document.querySelector("#volumenumber");
const read = document.querySelector("#didread");
const diread = document.querySelector("#didntread");
const tpages = document.querySelector("#totalpages");
let volumee = 0,
  totalpages = 0,
  readbooks = 0,
  unreadbooks = 0;
function Book(title, author, pages, year, type) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.type = type;
  this.unread = false;
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
let bookss = [];
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
    <h3 style="text-align:center;">${newbook.title}</h3>
    <p>by ${newbook.author}</p>
    <p>${newbook.type} • ${newbook.pages} pages</p>
    <p>Year: ${newbook.year}</p>
    <div class="flex4">
    <button class="unread">UNREAD</button>
    <button class="delete">🗑</button>
    </div>
    
  `;

  // Add event listeners
  cover.addEventListener("click", () => {
    popup.style.display = "block";
  });

  cover.addEventListener("dblclick", () => {
    popup.style.animation = "light 0.3s ease 1 both alternate";
    popup.style.display = "none";
  });

  // Delete functionality
  popup.querySelector(".delete").addEventListener("click", () => {
    cover.remove();
    books = books.filter((book) => book !== cover);
  });

  const unread = popup.querySelector(".unread");
  let small1 = null; // Add this line to track the element
  unread.addEventListener("click", () => {
    if (unread.textContent === "UNREAD") {
      unread.textContent = "Read";
      unread.style.backgroundColor = "green";
      small1 = document.createElement("div"); // Fix createElement
      small1.classList.add("small1");
      small1.style.cssText = `
        width: 10px;
        height: 10px;
        background-color: #22c55e;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 5px;
      `;
      newbook.unread = true;
      cover.appendChild(small1);
    } else {
      unread.textContent = "UNREAD";
      unread.style.backgroundColor = "#d97706";
      if (small1) small1.remove(); // Fix removal
      newbook.unread = false;
    }
  });

  cover.appendChild(cont);
  cover.appendChild(popup);
  forthdiv.appendChild(cover);
  bookss.push(newbook);
  books.push(cover);
  form.reset();

  volumee = 0;
  totalpages = 0;
  readbooks = 0;
  unreadbooks = 0;

  bookss.forEach((book) => {
    totalpages += parseInt(book.pages);
    volumee = bookss.length;
    if (book.unread === true) {
      readbooks += 1;
    } else {
      unreadbooks += 1;
    }
  });

  volume.textContent = volumee;
  read.textContent = readbooks;
  diread.textContent = unreadbooks;
  tpages.textContent = totalpages;
});

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();

  books.forEach((cover, index) => {
    const bookTitle = bookss[index].title.toLowerCase();
    if (bookTitle.includes(searchTerm)) {
      cover.style.display = "block";
      cover.style.animation = "fadeIn 0.3s ease forwards";
    } else {
      cover.style.display = "none";
    }
  });
});
