const borderArea = 600;
const rows = 16;
const column = 16;

const sketchArea = document.querySelector ("#container");
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
    }
}
grid();