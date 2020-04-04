const empties = document.querySelectorAll(".empty");
const selectList = document.querySelectorAll(".selectList");
const button = document.querySelector("button");
const emptyTask = document.querySelector(".emptytask");
const paragraf = document.getElementsByClassName("paragraf_fill");

console.log(emptyTask.children, "first")

function Select(p, createdTask){

for (const option of selectList)
  option.addEventListener("change", function(event) {
    const selectItem = event.target.value;
   
    console.log(emptyTask.children, "select")
    if (selectItem === "bardzowazne") {
        createdTask.style.borderColor = "red";
      
    }else if (selectItem === "wazne") {
        createdTask.style.borderColor = "orange"

    }else if (selectItem === "mniejwazne") {
        createdTask.style.borderColor = "yellow"

    }else if (selectItem === "malowazne") {
        createdTask.style.borderColor = "green"

    }
  });
  
const input = document.querySelector(".create-task-input");

input.addEventListener("input", addTodiv);

function addTodiv(event) {
  const value = event.target.value;
  p.innerText = value;
  
}
}

const fill = document.getElementsByClassName("fill");


button.addEventListener("click", function() {
    console.log(emptyTask.children, "button")
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.className = "fill";
  p.className ="paragraf_fill"


  div.draggable = "true";
  div.appendChild(p);
  emptyTask.appendChild(div);

  const createdTask = emptyTask.children[0];
  console.log(createdTask)
  //createdTask.style.borderColor = "red"
  //console.log( button.parentElement.nextElementSibling.children[0])
  //console.log(emptyTask.children[0])

  Select(p, createdTask)

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
  this.className += " hovered";
}

function dragLeave(event) {
  event.target.className = "empty";
}

function dragDrop(event) {
  event.target.className = "empty";

  for (const element of fill) {
    if (element.className == "fill hold") {
      event.target.append(element);
     console.log(emptyTask.children, "after drag")
    }
  }
}
