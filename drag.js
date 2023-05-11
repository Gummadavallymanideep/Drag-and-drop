let squares = document.querySelectorAll(".square");
let selectedSquare = null;


for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mousedown", selectSquare);
}

function selectSquare(e) {
  e.preventDefault();

  selectedSquare = e.target;
  selectedSquare.classList.add("selected");

  selectedSquare.initialX = e.clientX - selectedSquare.offsetLeft;
  selectedSquare.initialY = e.clientY - selectedSquare.offsetTop;

  document.addEventListener("mousemove", dragSquare);
  document.addEventListener("mouseup", releaseSquare);
}

function dragSquare(e) {
  if (selectedSquare) {
    e.preventDefault();
    selectedSquare.style.left = e.clientX - selectedSquare.initialX + "px";
    selectedSquare.style.top = e.clientY - selectedSquare.initialY + "px";
  }
}

function releaseSquare() {
  if (selectedSquare) {
    selectedSquare.classList.remove("selected");
    selectedSquare = null;

    document.removeEventListener("mousemove", dragSquare);
    document.removeEventListener("mouseup", releaseSquare);
  }
}
