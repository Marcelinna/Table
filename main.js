const empties = document.querySelectorAll(".empty");
const selectList = document.querySelectorAll(".selectList");
const button = document.querySelector("button");
const emptyTask = document.querySelector(".emptytask");
const input = document.querySelector(".create-task-input");
const buttonDone = document.querySelectorAll(".button-done");
const buttonRemove = document.querySelectorAll(".button-remove");

for (const button of buttonRemove) {
  button.addEventListener("click", function () {
    button.parentElement.firstElementChild.firstElementChild.remove();
    button.parentElement.firstElementChild.className = "empty";
  });
}

for (const button of buttonDone) {
  button.addEventListener("click", function () {
    button.parentElement.firstElementChild.classList.toggle("done");
  });
}


function Select() {
  for (const option of selectList)
    option.addEventListener("change", function (event) {
      const selectItem = event.target.value;
      const createdTask = emptyTask.children[0];

      if (selectItem === "urgent-important") {
        createdTask.style.borderColor = "#ff0202";
      } else if (selectItem === "not-urgent-important") {
        createdTask.style.borderColor = "#ffa807";
      } else if (selectItem === "urgent-unimportant") {
        createdTask.style.borderColor = "#fdfd05";
      } else if (selectItem === "not-urgent-unimportant") {
        createdTask.style.borderColor = "#028502";
      }
    });

  input.addEventListener("input", addTodiv);
}

function addTodiv(event) {
  const par = emptyTask.children[0].children[0];
  const value = event.target.value;
  par.innerText = value;
}

const fill = document.getElementsByClassName("fill");

button.addEventListener("click", function () {
  button.disabled = true;

  //create task div and paragraf
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.className = "fill";
  p.className = "paragraf_fill";
  div.draggable = "true";

  // append element to DOM
  div.appendChild(p);
  emptyTask.appendChild(div);

  Select();

  const fill = document.querySelectorAll(".fill");

  // add eventListener to created task div
  for (const element of fill) {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
  }
});

// Add eventListener to empty box

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag 

function dragStart(event) {
  event.target.className += " hold";
}

function dragEnd(event) {
  event.target.className = "fill";
}

function dragOver(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (event.target.childNodes.length > 0) {
    event.target.style.pointerEvents = "none";
  }
}

function dragEnter(event) {
  event.preventDefault();
}

function dragLeave(event) {
  setTimeout(Leave, 1000);

  event.target.style.backgroundColor = "white";

  function Leave() {
    for (const element of fill) {
      element.style.pointerEvents = "auto";
    }
  }
}

function dragDrop(event) {
  event.target.className = "empty";

  input.value = "";

  if (fill.length <= 8) {
    button.disabled = false;
  }

  for (const element of fill) {
    if (element.className === "fill hold") {
      event.target.append(element);
      element.style.pointerEvents = "auto";
    } else {
      element.style.pointerEvents = "auto";
    }
  }

  for (const empty of empties) {
    empty.style.pointerEvents = "auto";
  }
}
