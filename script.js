"use strict";

const toDo = document.querySelector(".to-do");
const radioBtn = document.querySelector("#radio");

const container = document.querySelector(".container");
const list = document.querySelectorAll(".list");
const toDoNum = document.querySelector(".to-do-num");

const cross = document.querySelectorAll(".cross");
const radioList = document.querySelectorAll("#radio-list")

const clear = document.querySelector(".clear");

// theme 2
const theme = document.querySelector(".btn-theme");
const body = document.querySelector("body");
const main = document.querySelector("main");
const listP = document.querySelectorAll(".list-p");
const header = document.querySelector("header");
const svg1 = document.querySelector(".svg-1");
const svg2 = document.querySelector(".svg-2");
const input = document.querySelector(".to-do-list")
const mainF = document.querySelector(".main-f")



const toDoNumbers = [];

//   Calculate Number of To-do items
list.forEach((list) => {
  toDoNumbers.push(list);
});

toDoNum.textContent = toDoNumbers.length;

// add todo list
radioBtn.addEventListener("click", function () {
  const toDoItem = toDo.value;
  if (toDoItem === "") return;
  const html = `
    <div class="list">
        <input type="radio" name="" id="radio-list">
        <p class="list-p">${toDoItem}</p>
        <svg class="cross hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </div>
    `;
  container.insertAdjacentHTML("afterbegin", html);
  toDo.value = "";
  toDoNum.textContent++;
  
  // dispalyCross();
});

// Showing and hiding the delete cross btn
const dispalyCross = function() {
    cross.forEach((cross) => {
        console.log(cross)
  const closest = cross.closest(".list");
  if (closest)
    closest.addEventListener("mousemove", function () {
      cross.classList.remove("hidden");
    });
  closest.addEventListener("mouseout", function () {
    cross.classList.add("hidden");
  });
})
};
dispalyCross();

// Adding functionality to the delete btn

//Mak as completed
radioList.forEach(radio => radio.addEventListener("click", function(){
    const closest = radio.closest(".list");
    closest.classList.toggle("strike");
    console.log(radio)
}))

// clear button 






// change theme 
theme.addEventListener("click", function () {
    body.classList.toggle("bg-color");
    main.classList.toggle("main-bg-color");
    listP.forEach( p => p.classList.toggle("text"));
    list.forEach(list => list.classList.toggle("border"));
    header.classList.toggle("bg-image");
    svg1.classList.toggle("hidden");
    svg2.classList.toggle("hidden");
    input.classList.toggle("border");
    input.classList.toggle("main-bg-color");
    toDo.classList.toggle("main-bg-color");
    toDo.classList.toggle("to-do-2");
    mainF.classList.toggle("border");
});