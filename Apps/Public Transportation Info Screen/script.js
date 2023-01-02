const doorOne = document.querySelector(".door-one");
const doorTwo = document.querySelector(".door-two");
const arrow = document.querySelector(".arrow i");
const door = document.querySelector(".door");
const text = document.querySelector(".text");

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
  doorOne.style.marginRight = "0";
  doorTwo.style.marginLeft = "0";
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
  text.innerHTML = "Door to Open: Left";
}

setInterval(openDoor, 500);
setInterval(closeDoor, 1000);
setInterval(textTurk, 500);
setInterval(textEng, 1000);
