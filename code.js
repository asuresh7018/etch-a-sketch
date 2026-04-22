const row = document.querySelector(".row");
const canvas = document.querySelector("#canvas");
const tile = document.querySelector(".tile");

// Add tiles to row
for (let i = 0; i < 15; i++) {
    row.appendChild(tile.cloneNode(true));
}

// Add rows to canvas
for (let i = 0; i < 15; i++) {
    canvas.appendChild(row.cloneNode(true));
}