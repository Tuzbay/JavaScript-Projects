const front = document.querySelector(".credit-card-front");
const back = document.querySelector(".credit-card-back");
const ccv = document.querySelector(".ccv");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const cardNoInput = document.querySelector(".cardNo-input");
const cardNo = document.querySelector(".credit-card-front h2");

const cardNameInput = document.querySelector(".cardName-input");
const cardName = document.querySelector(".credit-card-front h3");

const cardCcvInput = document.querySelector(".cardCcv-input");
const cardCcv = document.querySelector(".credit-card-back h2");

const dateInput = document.querySelector(".cardDate-input");
const cardDate = document.querySelector(".credit-card-front h4");

ccv.addEventListener("focus", () => {
  front.style.display = "none";
  back.style.display = "flex";
});

input1.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});
input2.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});
input3.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});

cardNoInput.addEventListener("input", function (e) {
  cardNo.innerHTML = this.value;
});

cardNameInput.addEventListener("input", function (e) {
  cardName.innerHTML = this.value.toUpperCase();
});

cardCcvInput.addEventListener("input", function (e) {
  cardCcv.innerHTML = this.value;
});

dateInput.addEventListener("input", function (e) {
  cardDate.innerHTML = this.value;
});
