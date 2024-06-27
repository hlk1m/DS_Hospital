"use strict";

const toggleBtn = document
  .querySelector(".toggle_btn")
  .addEventListener("click", onToggle);

function onToggle() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hidden");
}
