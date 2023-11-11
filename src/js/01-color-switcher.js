
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const elements = {
    bodyPage: document.body,
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]')
}

let colorInterval
elements.buttonStop.disabled = true;

elements.buttonStart.addEventListener('click', getRandomColorHandler);
elements.buttonStop.addEventListener('click', stopRandomColorHandler)

function getRandomColorHandler() {
    elements.buttonStart.disabled = true;
    elements.buttonStop.disabled = false;

    colorInterval = setInterval(() => {
        elements.bodyPage.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopRandomColorHandler() {
    elements.buttonStart.disabled = false;
    elements.buttonStop.disabled = true;
    clearInterval(colorInterval)
}