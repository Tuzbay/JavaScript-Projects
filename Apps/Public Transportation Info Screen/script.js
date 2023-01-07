const doorOne = document.querySelector(".door-one");
const doorTwo = document.querySelector(".door-two");
const arrow = document.querySelector(".arrow img");
const door = document.querySelector(".door");
const text = document.querySelector(".text");
const bostanci = document.querySelector(".screen1__location .bostanci");
const arrowArriving = document.querySelector(".done-path img");
const screen = document.querySelector(".screen");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
var styleElem = document.head.appendChild(document.createElement("style"));
const firstdonePath = document.querySelector(".firstdonePath");
const bostanci1 = document.querySelector(".screen2__location #bostanci1");
const train = document.querySelector(".firstdonePath i");

// ? ----- ----- ----- ----- ? \\
// ! 1.Page Start ! \\

function first1arriving() {
  styleElem.innerHTML =
    "#bostanci1:before {color: green;transition: .3s ease-in all; }";
  train.style.color = "red";
  bostanci1.style.color = "blue";
  bostanci1.style.transition = ".3s linear color";
}

function first2arriving() {
  styleElem.innerHTML =
    "#bostanci1:before {color: rgb(248, 244, 244);transition: .3s ease-out all;}";
  train.style.color = "yellow";
  bostanci1.style.color = "red";
  bostanci1.style.transition = ".3s linear color";
}

function page1() {
  screen.style.display = "none";
  screen1.style.display = "none";
  screen2.style.display = "flex";
  setInterval(first1arriving, 500);
  setInterval(first2arriving, 1000);
}

// ! 1.Page End ! \\
// ? ----- ----- ----- ----- ? \\
// ! 2.Page Start ! \\

function arriving1() {
  bostanci.style.color = "blue";
  arrowArriving.style.visibility = "visible";
  arrowArriving.style.transition = ".1s linear all";
  styleElem.innerHTML =
    "#bostanci:before {color: yellow; transition: .2s linear all;}";
}

function arriving2() {
  bostanci.style.color = "red";
  arrowArriving.style.visibility = "hidden";
  arrowArriving.style.transition = ".1s linear all";
  styleElem.innerHTML =
    "#bostanci:before {color: green;transition: .2s linear all;}";
}

function page2() {
  screen.style.display = "none";
  screen1.style.display = "flex";
  screen2.style.display = "none";
  setInterval(arriving1, 500);
  setInterval(arriving2, 1000);
}

// ! 2.Page End ! \\
// ? ----- ----- ----- ----- ? \\
// ! 3.Page Start ! \\

function openDoor() {
  doorOne.style.marginRight = "10rem";
  doorTwo.style.marginLeft = "10rem";
  door.style.position = "relative";
  arrow.style.position = "absolute";
  arrow.style.bottom = "26rem";
  arrow.style.transition = ".4s ease all";
  doorOne.style.transition = ".3s ease all";
  doorTwo.style.transition = ".3s ease all";
  text.innerHTML = "Açılacak Kapı: Sol";
}

function closeDoor() {
  doorOne.style.marginRight = "1rem";
  doorTwo.style.marginLeft = "1rem";
  door.style.position = "relative";
  arrow.style.position = "absolute";
  arrow.style.bottom = "8.5rem";
  arrow.style.transition = ".4s ease all";
  doorOne.style.transition = ".3s ease all";
  doorTwo.style.transition = ".3s ease all";
  text.innerHTML = "Door Open: Left";
}

function page3() {
  screen.style.display = "block";
  screen1.style.display = "none";
  screen2.style.display = "none";
  setInterval(openDoor, 700);
  setInterval(closeDoor, 1400);
}

// ! 3.Page End ! \\
// ? ----- ----- ----- ----- ? \\
// ! Async Await Function Start ! \\

function total1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(page2());
    }, 10000);
  });
}

function total2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(page3());
    }, 6000);
  });
}

async function topTotal() {
  page1();
  const result = await total1();
  console.log(result);
  const result1 = await total2();
  console.log(result1);
  const result2 = total3();
  console.log(result2);
}

topTotal();

// ! Async Await Function End ! \\
