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
    const tile = document.createElement("div");
    tile.className = "tile";
    canvas.appendChild(row);
        for (let i = 0; i < width; i++) {
        row.appendChild(tile.cloneNode(true));
        }
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

function createGrid(width) {
    for (let i = 0; i < width; i++) {
        spawnRow(width);
    }
}

