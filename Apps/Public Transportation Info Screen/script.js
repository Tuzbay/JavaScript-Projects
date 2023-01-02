const doorOne = document.querySelector(".door-one");
const doorTwo = document.querySelector(".door-two");
const arrow = document.querySelector(".arrow i");
const door = document.querySelector(".door");
const text = document.querySelector(".text");
const bostanci = document.querySelector(".screen1__location .bostanci");
const arrowArriving = document.querySelector(".done-path i");
const screen = document.querySelector(".screen");
const screen1 = document.querySelector(".screen1");
function openDoor() {
  doorOne.style.marginRight = "10rem";
  doorTwo.style.marginLeft = "10rem";
  door.style.position = "relative";
  arrow.style.position = "absolute";
  arrow.style.bottom = "30rem";
  arrow.style.transition = ".4s ease all";
  doorOne.style.transition = ".3s ease all";
  doorTwo.style.transition = ".3s ease all";
}

function closeDoor() {
  doorOne.style.marginRight = "1rem";
  doorTwo.style.marginLeft = "1rem";
  door.style.position = "relative";
  arrow.style.position = "absolute";
  arrow.style.bottom = "13rem";
  arrow.style.transition = ".4s ease all";
  doorOne.style.transition = ".3s ease all";
  doorTwo.style.transition = ".3s ease all";
}

function textTurk() {
  text.innerHTML = "Açılacak Kapı: Sol";
}

function textEng() {
  text.innerHTML = "Door Open: Left";
}

function arriving1() {
  bostanci.style.color = "yellow";
  arrowArriving.style.visibility = "visible";
  bostanciTop.style.display = "hidden";
}

function arriving2() {
  bostanci.style.color = "green";
  arrowArriving.style.visibility = "hidden";
}

function page2() {
  screen.style.display = "none";
  screen1.style.display = "flex";
  setInterval(arriving1, 500);
  setInterval(arriving2, 1000);
}

function page3() {
  screen.style.display = "block";
  screen1.style.display = "none";
  setInterval(openDoor, 500);
  setInterval(closeDoor, 1000);
  setInterval(textTurk, 500);
  setInterval(textEng, 1000);
}

page2();
