const mainContainer = document.querySelector(".mainContainer");
//creates the gridsquares for the page
for (let i = 0; i < 255; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("square");
  mainContainer.append(gridSquare);
}
