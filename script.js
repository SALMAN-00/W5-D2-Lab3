let height1 = document.getElementById("height");
let width1 = document.getElementById("width");
let color1 = document.getElementById("color");
let div = document.getElementById("container");
let button1 = document.getElementById("buttonHeight");
let button2 = document.getElementById("buttonWidth");
let button3 = document.getElementById("buttonColor");
let button4 = document.getElementById("button");

height1.addEventListener("input", function () {
  div.style.height = `${parseInt(height1.value)}px`;
});

width1.addEventListener("input", function () {
  div.style.width = `${parseInt(width1.value)}px`;
});

color1.addEventListener("input", function () {
  div.style.backgroundColor = color1.value;
});

button1.addEventListener("click", function () {
  let heightValue = height1.value;
  div.style.height = `${parseInt(heightValue)}px`;
});

button2.addEventListener("click", function () {
  let widthValue = width1.value;
  div.style.width = `${parseInt(widthValue)}px`;
});
button3.addEventListener("click", function () {
  let colorValue = color1.value;
  div.style.backgroundColor = colorValue;
});

button4.addEventListener("click", function () {
  height1.value = 50;
  width1.value = 50;
  color1.value = "#000000";
  div.style.height = `${parseInt(height1.value)}px`;
  div.style.width = `${parseInt(width1.value)}px`;
  div.style.backgroundColor = color1.value;
});
