// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
const close = document.getElementById("close");
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
