const canvas = document.querySelector("#canvas");
let gridWidth;

function clearGrid() {
    for (let i=0; i < canvas.childNodes.length; i++) {
        canvas.removeChild(canvas.firstChild);
    }
    // Unknown why it doesn't clear everything with just above function, so use recursion
    if (canvas.childNodes.length > 0) {
        clearGrid();
    }
}

function spawnRow(width) {
    const row = document.createElement("div");
    row.className = "row";
    canvas.appendChild(row);
        for (let i = 0; i < width; i++) {
        row.appendChild(spawnTile());
        }
}

function spawnTile() {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.opacity = 0.0;
    return tile;
}

function getNewSize() {
    while (true) {
        gridWidth = prompt("Enter the new size for the canvas. (Between 1 and 100)");
        gridWidth = Number(gridWidth);
        if (!(Number.isInteger(gridWidth))) {
            continue;
        }
        if (gridWidth > 0 && gridWidth <= 100) {
            break;
        }
    }
    clearGrid();
    createGrid(gridWidth);
}

function changeColor(tile) {
    let r,g,b;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    tile.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function raiseOpacity(tile) {
    if (Number(tile.style.opacity) < 1) {
        tile.style.opacity = Number(tile.style.opacity) + 0.1;
    }
}

function createGrid(width) {
    for (let i = 0; i < width; i++) {
        spawnRow(width);
    }
    const tiles = document.querySelectorAll(".tile");
     tiles.forEach((tile) => {
        tile.addEventListener("mouseover", (event) => {
            changeColor(event.target);
            raiseOpacity(event.target); 
        });
        }
    )
}


