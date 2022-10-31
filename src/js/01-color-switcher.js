const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector("[data-start]"),
    buttonStop: document.querySelector("[data-stop]")
    // buttonReload: document.querySelector("[data-reload]")
};
let stopRandomColor = null;
hideButtonStop()

refs.buttonStart.addEventListener("click", () => {
    refs.buttonStart.setAttribute("disabled", "disabled");
    refs.buttonStop.removeAttribute("disabled", "disabled");
    stopRandomColor = setInterval(() => {
        refs.body.style.background = `#${Math.floor(Math.random() * 16797215).toString(16)}`
    }, 1000)
});

refs.buttonStop.addEventListener("click", () => {
    hideButtonStop()
    refs.buttonStart.removeAttribute("disabled", "disabled");
    clearInterval(stopRandomColor)
});

function hideButtonStop() {
 refs.buttonStop.setAttribute("disabled", "disabled");
};
