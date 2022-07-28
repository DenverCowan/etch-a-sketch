//declare variables needed within the project
const mainContainer = document.querySelector(".mainContainer");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");

//creates the default grid-squares for the page
function defaultGrid() {
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    mainContainer.appendChild(gridSquare);
  }
}
//resizes the grid
resize.addEventListener("click", function resizeGrid() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  let rows = prompt("enter a grid size of up to 100!");
  for (let i = 0; i < rows * rows; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    mainContainer.appendChild(gridSquare);
  }
  coloring();
});

//resets the grid
reset.addEventListener("click", function resetGrid() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  defaultGrid();
  coloring();
});
//function for coloring in the squares with the mouse.
function coloring() {
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseenter", function (e) {
      e.target.style.cssText = "background-color: black;";
    });
  }
}

defaultGrid();
coloring();
