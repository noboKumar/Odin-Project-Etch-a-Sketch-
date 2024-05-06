const borderArea = 600;
const sketchArea = document.querySelector("#container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const eraserBtn = document.querySelector("#eraser-btn");
const resetBtn = document.querySelector("#reset-btn");
const randomBtn = document.querySelector("#random-btn");

function updateSliderValue() {
    const resolution = `${slider.value} x ${slider.value} (resolution)`;
    sliderValue.textContent = resolution;
    clearGrid();
    createGrid();
}

slider.addEventListener("input", updateSliderValue);
eraserBtn.addEventListener("click", toggleEraser);
resetBtn.addEventListener("click", resetGrid);
randomBtn.addEventListener("click", toggleRandom);

updateSliderValue(16); // Set initial value

let eraserMode = false;
let randomMode = false;

function toggleEraser() {
    eraserMode = !eraserMode;
    if (eraserMode) {
        eraserBtn.textContent = "Drawing";
        randomMode = false;
        randomBtn.textContent = "Random";
    } else {
        eraserBtn.textContent = "Eraser";
    }
}

function toggleRandom() {
    randomMode = !randomMode;
    if (randomMode) {
        randomBtn.textContent = "Drawing";
        eraserMode = false;
        eraserBtn.textContent = "Eraser";
    } else {
        randomBtn.textContent = "Random";
    }
}

function resetGrid() {
    const confirmation = confirm("Resetting will clear the drawing. Are you sure you want to continue?");
    if (confirmation) {
        const gridPixels = document.querySelectorAll(".gridPixel");
        gridPixels.forEach(pixel => {
            if (pixel.style.backgroundColor === "black" || pixel.style.backgroundColor !== "#F0F8FF") {
                pixel.style.backgroundColor = "#F0F8FF";
            }
        });
        randomMode = false; // Reset random mode
        randomBtn.textContent = "Random"; // Reset random button text
    }
}


function clearGrid() {
    sketchArea.innerHTML = ''; // Clear the existing grid
}

function createGrid() {
    const rows = parseInt(slider.value); // Get value from slider
    const columns = parseInt(slider.value); // Get value from slider
    const pixelSize = borderArea / Math.max(rows, columns); // Adjust grid size based on the larger dimension

    sketchArea.style.width = `${columns * pixelSize}px`; // Adjust container width
    sketchArea.style.height = `${rows * pixelSize}px`; // Adjust container height

    for (let i = 0; i < rows * columns; i++) {
        const gridPixel = document.createElement("div");
        gridPixel.classList.add("gridPixel");

        gridPixel.style.width = `${pixelSize - 2}px`; // Adjust pixel size
        gridPixel.style.height = `${pixelSize - 2}px`; // Adjust pixel size

        sketchArea.appendChild(gridPixel);
        sketchArea.classList.add("squareArea");

        gridPixel.addEventListener("mouseover", () => {
            if (eraserMode) {
                gridPixel.style.backgroundColor = "#F0F8FF"; // Set background color to erase
            } else if (randomMode) {
                gridPixel.style.backgroundColor = getRandomColor();
            } else {
                gridPixel.style.backgroundColor = "black";
            }
        });
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorBtn = document.querySelector("#color-btn");
const colorPicker = document.querySelector("#color-picker");

colorBtn.addEventListener("click", toggleColorPicker);
colorPicker.addEventListener("input", setColor);

let colorMode = false;

function toggleColorPicker() {
    colorMode = !colorMode;
    if (colorMode) {
        colorPicker.style.display = "block";
    } else {
        colorPicker.style.display = "none";
    }
}

function setColor() {
    const selectedColor = colorPicker.value;

    if (colorMode) {
        const gridPixels = document.querySelectorAll(".gridPixel");
        gridPixels.forEach(pixel => {
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = selectedColor;
            });
        });
    }
}
