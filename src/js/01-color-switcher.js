const bodyEl = document.querySelector("body");
const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");
stopEl.setAttribute("disabled", "");

startEl.addEventListener("click", onStart);
stopEl.addEventListener("click", onStop);
let intervalId;

function onStart(event) {
    changeColor(bodyEl);
    intervalId = setInterval(() => {
        changeColor(bodyEl);
    }, 1000);
    event.target.setAttribute("disabled", "");
    event.target.nextElementSibling.removeAttribute("disabled");
}

function onStop(event) {
    clearInterval(intervalId);
    event.target.setAttribute("disabled", "");
    event.target.previousElementSibling.removeAttribute("disabled");
}

function changeColor(element) {
    element.style.backgroundColor = getRandomHexColor();
    console.log(
        `%c Changing color to ${bodyEl.style.backgroundColor}`,
        `color: ${bodyEl.style.backgroundColor}`
    );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
