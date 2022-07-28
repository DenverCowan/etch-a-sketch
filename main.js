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
  let rows = prompt("enter a grid size of up to 100!");
  if (rows > 100 || rows < 0) {
    alert("please enter a number between 1 and 100");
  } else {
    for (let i = 0; i < rows; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");
      mainContainer.appendChild(gridSquare);
    }
  }
});

//resets the grid
reset.addEventListener("click", function resetGrid() {
  defaultGrid();
});

defaultGrid();
