const borderArea = 600;
const rows = 16;
const column = 16;

const sliderContent = document.querySelector("#slider-content")
const sketchArea = document.querySelector ("#container");
const slider = document.querySelector ("#slider");
const sliderValue = document.querySelector ("#slider-value")

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchArea.style.width = `${borderArea}px`;
sketchArea.style.height = `${borderArea}px`;

function grid (){
    for (let i = 0; i < (rows * column); i++ ){
        const gridPixel = document.createElement("div");
        gridPixel.classList.add ("gridPixel")

        
        gridPixel.style.width = `${(borderArea / column) - 2}px`
        gridPixel.style.height = `${(borderArea / rows) - 2}px`
        
        sketchArea.appendChild (gridPixel);
        sketchArea.classList.add ("squareArea");

        gridPixel.addEventListener("mouseover", () => {
            gridPixel.style.backgroundColor = "black"
        })
    }
}
grid(16);

function sliderValueChange (grid){
    document.getElementById("slider-value").innerHTML = grid;
}

sliderValueChange();