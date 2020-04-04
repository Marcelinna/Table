const empties = document.querySelectorAll(".empty");
const selectList = document.querySelectorAll(".selectList");
const button = document.querySelector("button");
const emptyTask = document.querySelector(".emptytask");

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

  const input = document.querySelector(".create-task-input");

  input.addEventListener("input", addTodiv);

  const par = emptyTask.children[0].children[0];
  console.log(par);

  function addTodiv(event) {
    const value = event.target.value;
    console.log(par, "functionaddTOdiv");
    par.innerText = value;
  }
}

const fill = document.getElementsByClassName("fill");

button.addEventListener("click", function () {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.className = "fill";
  p.className = "paragraf_fill";

  div.draggable = "true";
  div.appendChild(p);
  emptyTask.appendChild(div);

  Select();

  const fill = document.querySelectorAll(".fill");

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
}

function dragEnter(e) {
  e.preventDefault();
  event.target.className += " hovered";
}

function dragLeave(event) {
  event.target.className = "empty";
}

function dragDrop(event) {
  event.target.className = "empty";

  for (const element of fill) {
    if (element.className == "fill hold") {
      event.target.append(element);
    }
  }
}
