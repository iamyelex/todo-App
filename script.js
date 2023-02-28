"use strict";

const toDo = document.querySelector(".to-do");
const radioBtn = document.querySelector("#radio");

const container = document.querySelector(".container");
const list = document.querySelectorAll(".list");
const toDoNum = document.querySelector(".to-do-num");
const toDoNumMobile = document.querySelector(".to-do-num-mobile");

const cross = document.querySelectorAll(".cross");
const radioList = document.querySelectorAll("#radio-list");

const taskCompleted = document.querySelector(".task-completed");

// btn 
const btnCompleted = document.querySelector(".btn-completed");
const btnAll = document.querySelector(".btn-all");
const btnActive = document.querySelector(".btn-active");
const btnClear = document.querySelector(".btn-clear");

// theme 2
const theme = document.querySelector(".btn-theme");
const body = document.querySelector("body");
const main = document.querySelector("main");
const listP = document.querySelectorAll(".list-p");
const header = document.querySelector("header");
const svg1 = document.querySelector(".svg-1");
const svg2 = document.querySelector(".svg-2");
const input = document.querySelector(".to-do-list");
const mainF = document.querySelector(".main-f");

const toDoNumbers = [];

//   Calculate Number of To-do items
list.forEach((list) => {
  toDoNumbers.push(list);
});

toDoNum.textContent = toDoNumbers.length;
toDoNumMobile.textContent = toDoNumbers.length;

// add todo list
const addTodo = function() {
  radioBtn.addEventListener("click", function () {
  const toDoItem = toDo.value;
  if (toDoItem === "") return;
  const html = `
    <div class="list">
        <input type="radio" name="" id="radio-list" class="complete">
        <p class="list-p">${toDoItem}</p>
        <svg class="cross hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </div>
    `;
  container.insertAdjacentHTML("afterbegin", html);
  toDo.value = "";
  toDoNum.textContent++;
  toDoNumMobile.textContent++;

  // dispalyCross();
  toggleDeleteBtn();
  completedStrike();
  deleteBtn();
})
};

addTodo();

// Showing and hiding the delete cross btn
// const dispalyCross = function () {
//   cross.forEach((cross) => {
//     // console.log(cross)
//     const closest = cross.closest(".list");
//     if (closest)
//       closest.addEventListener("mousemove", function () {
//         cross.classList.remove("hidden");
//       });
//     closest.addEventListener("mouseout", function () {
//       cross.classList.add("hidden");
//     });
//   });
// };
// dispalyCross();

// Toggle delete button on each to-do 
const toggleDeleteBtn = function () {
  // console.log(container.children);
  Array.from(container.children).forEach((child) =>
    child.addEventListener("mousemove", function () {
      // console.log(child.children);
      Array.from(child.children).forEach((child) => {
        if (child.classList.contains("cross")) 
        child.classList.remove("hidden");
      });

      child.addEventListener("mouseout", () => {
        Array.from(child.children).forEach((child) => {
          if (child.classList.contains("cross")) child.classList.add("hidden");
        });
      });
    })
  );
};

toggleDeleteBtn();

//Mak as completed
// radioList.forEach((radio) =>
//   radio.addEventListener("click", function () {
//     const closest = radio.closest(".list");
//     closest.classList.toggle("strike");
//     // console.log(radio)
//   })
// );

// strike through as Completed
const completedStrike = function(){
  Array.from(container.children).forEach(child => child.addEventListener("click", function(e){
        if(e.target.classList.contains("complete")){
          child.classList.toggle("strike");

          if(child.classList.contains("strike")) 
            toDoNum.textContent--;

          if(!child.classList.contains("strike"))
            toDoNum.textContent++;
        }
  })

)}

completedStrike();




// Adding functionality to the delete btn
const deleteBtn = function() {
  // cross.forEach(cross =>
  //   cross.addEventListener("click", function(){
  //     const closest = cross.closest(".list")
  //     if(closest) closest.remove();
  //     // toDoNum.textContent--;
  //   }))

    // Array.from(container.children).forEach(child => {
    //   child.addEventListener("click", function(){
    //     console.log(child)
    //   })
    // })


  Array.from(container.children).forEach(child => child.addEventListener("click", function(e){
    if (e.target.classList.contains("cross")) {
    // child.remove();
    // toDoNum.textContent--;
  }
  })
  )

}

deleteBtn();


// completed btn 
btnCompleted.addEventListener("click", function(){
  // console.log("clickeedd")
  // console.log(container)
 Array.from(container.children).forEach(child => {
  if (child.classList.contains("list") && !child.classList.contains("strike")){
    // console.log(child)
    child.style.display = "none";
  }
 })
})

// All btn 
btnAll.addEventListener("click", function(){
  Array.from(container.children).forEach(child => {
    // console.log(child);
    if (!child.classList.contains("task-completed")){
      child.style.display = "flex";
      taskCompleted.classList.add("hidden");
    }
  });
})

// Active btn 
btnActive.addEventListener("click", function(){
 Array.from(container.children).forEach(child => {
  if (child.classList.contains("list") && child.classList.contains("strike")){
    child.style.display = "none";
  }
 })
})

// clear completed button
btnClear.addEventListener("click", function(){
  Array.from(container.children).forEach(child => {
    if (child.classList.contains("list") && child.classList.contains("strike")){
      child.style.display = "none";
      taskCompleted.classList.remove("hidden");
      child.classList.remove("strike");
    }
  });
});



// change theme
theme.addEventListener("click", function () {
  body.classList.toggle("bg-color");
  main.classList.toggle("main-bg-color");
  listP.forEach((p) => p.classList.toggle("text"));
  list.forEach((list) => list.classList.toggle("border"));
  header.classList.toggle("bg-image");
  svg1.classList.toggle("hidden");
  svg2.classList.toggle("hidden");
  input.classList.toggle("border");
  input.classList.toggle("main-bg-color");
  toDo.classList.toggle("main-bg-color");
  toDo.classList.toggle("to-do-2");
  mainF.classList.toggle("border");
});



const clickMe =  document.querySelector(".click-btn")

clickMe.addEventListener("click",function(){
  const closest = clickMe.closest(".click-me");
  if (closest) {
    console.log(closest);
    closest.classList.add("click-me-color")
    setInterval(() => {
      closest.classList.remove("click-me-color")
    }, 200);
  }
})