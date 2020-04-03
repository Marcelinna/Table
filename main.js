const [...fill] = document.getElementsByClassName("fill");
console.log(fill)

const p = document.querySelector("p");
const empties = document.querySelectorAll(".empty");
const selectList = document.querySelectorAll(".selectList");
const button = document.querySelector("button");
const emptyTask = document.querySelector(".emptytask");


// for(const option of selectList)
//    option.addEventListener("select", function(event){
//       const selectItem = event.target.value
//       console.log(selectItem)
//       if(selectItem === "bardzowazne"){
//           fill.style.borderColor = "red";
//       }
//    })

// const input = document.querySelector(".create-task-input")

// input.addEventListener("input",addTodiv)

// function addTodiv(e){
//     const value=event.target.value;
//     p.innerText=value
// }

button.addEventListener("click", function(){
    const div = document.createElement("div");
    div.className ="fill"

    div.draggable = "true";
    emptyTask.appendChild(div);

})




for (const element of fill) {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragend", dragEnd);
 
  
  
}




// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(fill[0]);
  }
  