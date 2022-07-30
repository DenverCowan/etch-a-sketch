//create buttons and cache the DOM
const container = document.querySelector(".container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRandom = document.createElement("button");
const btnSize = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons");

//function to make the page load with the black color pencil
window.onload = () => {
  const boxes = container.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseenter", () => {
      box.style.background = "black";
    })
  );
};

//function to create the grid divs
function createDivs(col, row) {
  for (let i = 0; i < col * row; i++) {
    const div = document.createElement("div");
    //div.style.border = "1px solid black";
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add("box");
  }
}
createDivs(16, 16);

//function for Gray colors button
function grayColor() {
  const boxes = document.querySelectorAll(".box");
  btnGray.textContent = "Gray";
  btnGray.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseenter", () => {
        let Rnum = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
      })
    );
  });
  buttonsContainer.appendChild(btnGray);
  btnGray.classList.add("btn");
}
grayColor();

//function for black colors button
function blackColor() {
  const boxes = document.querySelectorAll(".box");
  btnBlack.textContent = "Black";
  btnBlack.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseenter", () => {
        box.style.background = "black";
      })
    );
  });
  buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();

//function for RGB colors
function RandomColor() {
  const boxes = document.querySelectorAll(".box");
  btnRandom.textContent = "Random";
  btnRandom.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseenter", () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        box.style.background = `rgb(${r}, ${g}, ${b})`;
      })
    );
  });
  buttonsContainer.appendChild(btnRandom).classList.add("btn");
}
RandomColor();

//function to reset grid
function reset() {
  const boxes = container.querySelectorAll(".box");
  boxes.forEach((box) => box.remove());
}

//function to resize grid
function resize() {
  btnSize.textContent = "Grid Size";
  btnSize.addEventListener("click", () => {
    let user = prompt("what size do you want your grid to be?");
    if (user === null || user < 1 || user > 100) {
      reset();
      createDivs(16, 16);
      grayColor();
      blackColor();
      RandomColor();
      buttonsContainer.appendChild(btnSize).classList.add("btn");
    } else {
      reset();
      createDivs(user, user);
      grayColor();
      blackColor();
      RandomColor();
      buttonsContainer.appendChild(btnSize).classList.add("btn");
    }
  });
  buttonsContainer.appendChild(btnSize).classList.add("btn");
}
resize();

//function for background animation
function backgroundAnimation() {
  colors = ["red", "blue", "yellow", "green", "purple"];
  const section = document.querySelector(".section");
  const span = document.createElement("span");

  let size = Math.random() * 25;

  span.style.width = 10 + size + "px";
  span.style.height = 10 + size + "px";

  span.style.borderRadius = `50%`;
  span.style.top = Math.random() * innerHeight + "px";
  span.style.left = Math.random() * innerWidth + "px";

  const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  span.style.background = backgroundColor;
  section.appendChild(span);

  setTimeout(() => {
    span.remove;
  }, 5000);
}
setInterval(backgroundAnimation, 500);
