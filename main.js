document.addEventListener("DOMContentLoaded", function(){
  createBoard(16);
  let popup = document.getElementById("popup");
  popup.onclick = selectSize;
});

let currentColor = 'red'; // Initial color

function changeColor(color) {
  currentColor = color;
}

function selectSize() {
  let size = prompt("Size?");
  
  if (isValidSize(size)) {
      createBoard(parseInt(size));
  } else {
      alert("Please enter a valid number between 1 and 128");
  }
}

function isValidSize(size) {
  return !isNaN(size) && parseInt(size) >= 1 && parseInt(size) <= 128;
}

function colorDiv(element) {
  element.style.backgroundColor = currentColor;
}

function createBoard(size) {
  let board = document.querySelector(".board");
  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
      let div = document.createElement("div");
      div.classList.add("divGrid");
      board.insertAdjacentElement('beforeend', div);
      div.addEventListener("mouseover", function() {
          colorDiv(div);
      });

      let selectedSize = document.getElementById('selectedSize');
      
      selectedSize.innerHTML = "Selected size is: " + size;


  }
}

function resetBoard() {
  let divGridElements = document.querySelectorAll(".divGrid");

  divGridElements.forEach(function(element) {
      element.style.backgroundColor = '';
  });



}