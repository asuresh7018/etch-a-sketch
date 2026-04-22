const row = document.createElement("div");
row.className = "row";
const tile = document.createElement("tile");
tile.className = "tile";
const canvas = document.querySelector("#canvas");

function clearGrid() {
    canvas.childNodes.forEach((node) => {
        canvas.removeChild(node);
    });
}

function createGrid(width) {
    // Create a single row
        canvas.appendChild(row.cloneNode(true));
        for (let i = 0; i < width-1; i++) {
        row.appendChild(tile.cloneNode(true));
        }

    // Add tiles to row
    for (let i = 0; i < width; i++) {
        row.appendChild(tile.cloneNode(true));
    }

    // Add rows to canvas
    for (let i = 0; i < width; i++) {
        canvas.appendChild(row.cloneNode(true));
    }
}

function spawnRow(width) {
    const newRow = row.cloneNode(true)
    canvas.appendChild(newRow);
        for (let i = 0; i < width; i++) {
        newRow.appendChild(tile.cloneNode(true));
        }
}

clearGrid();
for (let i = 0; i < 16; i++) {
    spawnRow(16);
}