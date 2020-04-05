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
      const diva = emptyTask.children[0];

      if (selectItem === "bardzowazne") {
        diva.style.borderColor = "red";
      } else if (selectItem === "wazne") {
        diva.style.borderColor = "orange";
      } else if (selectItem === "mniejwazne") {
        diva.style.borderColor = "yellow";
      } else if (selectItem === "malowazne") {
        diva.style.borderColor = "green";
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
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.className = "fill";
  p.className = "paragraf_fill";

  div.draggable = "true";
  div.appendChild(p);
  emptyTask.appendChild(div);

  Select();

  const fill = document.querySelectorAll(".fill");

  // if (fill.length > 2){
  //   alert("hahah")

  // }

  for (const element of fill) {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
  }
});

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions

function dragStart(event) {
  event.target.className += " hold";
}

function dragEnd(event) {
  event.target.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  if (event.target.childNodes.length > 0) {
    event.target.style.pointerEvents = "none";
  }
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave(e) {
  setTimeout(Levave, 1000);

  function Levave() {
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
