const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

const savedMode = JSON.parse(localStorage.getItem("mode"));
inputEl.checked = savedMode !== null ? savedMode : false;
updateTheme();

function updateTheme() {
  bodyEl.style.background = inputEl.checked ? "black" : "white";
}

inputEl.addEventListener("input", () => {
  updateTheme();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
