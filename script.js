const borderArea = 600;
const rows = 16;
const column = 16;

const sketchArea = document.querySelector ("#container");
sketchArea.style.width = `${borderArea}`;
sketchArea.style.height = `${borderArea}`;

function grid (){
    for (let i = 0; i < (rows * column); i++ ){
        const gridPixel = document.createElement("div");
        
        gridPixel.style.width = `${(borderArea / column) - 2}px`
        gridPixel.style.height = `${(borderArea / rows) - 2}px`
        
        sketchArea.appendChild (gridPixel);
        sketchArea.classList.add ("squareArea");
    }
}
grid();