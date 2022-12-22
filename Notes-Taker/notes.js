"use strict";

const button = document.querySelector(".add-note");
const caption = document.querySelector(".caption");


// const data = document.getElementById("data");

const addNote = () => {
  // e.preventDefault();

  caption.remove();
  const note = document.getElementById("note");
  const moreData = document.createElement("div");
  const main = document.querySelector(".main");
  // data.appendChild(moreData)
  main.appendChild(moreData);

  moreData.innerHTML = `
  <h5>Note</h5>
  <p id='extra'>${note.value}</p>
  <button class="btn btn-primary" onclick="toggle()">View Details</button>
  `;
  note.innerHTML = "";
};
function toggle() {
  const blur = document.getElementById("blur");
  const moreDetail = document.getElementById("moreDetail");
  // const extra = document.getElementById("extra");
  blur.classList.toggle("active");
  const popUp = document.getElementById("popUp");
  popUp.classList.toggle("active");
  moreDetail.innerHTML = note.value
  note.value = ""
}

button.addEventListener("click", () => {
  if (note.value == "") {
    alert("Please enter a Note first..");
  } else {
    addNote();
    ;
  }
});
