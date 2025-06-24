const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumberEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();