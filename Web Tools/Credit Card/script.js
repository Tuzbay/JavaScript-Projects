const front = document.querySelector(".credit-card-front");
const back = document.querySelector(".credit-card-back");
const ccv = document.querySelector(".ccv");
const input1 = document.querySelector(".input1");
const input = document.querySelector(".input");
const input3 = document.querySelector(".input3");

const cardNameInput = document.querySelector(".cardName-input");
const cardName = document.querySelector(".credit-card-front h3");

const cardCcvInput = document.querySelector(".cardCcv-input");
const cardCcv = document.querySelector(".credit-card-back h2");

const innerCard = document.querySelector(".innerCard");

ccv.addEventListener("focus", () => {
  front.style.display = "none";
  back.style.display = "flex";
});

input1.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});
input.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});
input3.addEventListener("focus", () => {
  front.style.display = "flex";
  back.style.display = "none";
});

cardNameInput.addEventListener("input", function (e) {
  cardName.innerHTML = this.value.toUpperCase();
});

cardCcvInput.addEventListener("input", function (e) {
  cardCcv.innerHTML = this.value;
});

// ! Card No Start ! \\

const cardNoInput = document.querySelector(".cardNo-input1");
const cardNo = document.querySelector(
  ".credit-card-front .cardNoCard .input-area-1"
);

cardNoInput.addEventListener("input", function (e) {
  cardNo.innerHTML = this.value;

  const mastercard = document.querySelector(".credit-card-front .mastercard");
  const visa = document.querySelector(".credit-card-front .visa");

  if (cardNoInput.value[0] === "5") {
    console.log("mastercard");
    mastercard.style.visibility = "visible";
    visa.style.visibility = "hidden";
  } else if (cardNoInput.value[0] === "4") {
    console.log("visa");
    mastercard.style.visibility = "hidden";
    visa.style.visibility = "visible";
  } else {
    cardNo.innerHTML = "Lütfen geçerli bir kart numarası giriniz.";
  }
});

const cardNoInput2 = document.querySelector(".cardNo-input2");
const cardNo2 = document.querySelector(
  ".credit-card-front .cardNoCard .input-area-2"
);

cardNoInput2.addEventListener("input", function (e) {
  cardNo2.innerHTML = this.value;
});

const cardNoInput3 = document.querySelector(".cardNo-input3");
const cardNo3 = document.querySelector(
  ".credit-card-front .cardNoCard .input-area-3"
);

cardNoInput3.addEventListener("input", function (e) {
  cardNo3.innerHTML = this.value;
});

const cardNoInput4 = document.querySelector(".cardNo-input4");
const cardNo4 = document.querySelector(
  ".credit-card-front .cardNoCard .input-area-4"
);

cardNoInput4.addEventListener("input", function (e) {
  cardNo4.innerHTML = this.value;
});

// ! Card No End ! \\

// ! Card Date Start ! \\

const dateInput = document.querySelector(".cardDate-inputMonth");
const cardDate = document.querySelector(".credit-card-front .cardDate .month");

dateInput.addEventListener("input", function (e) {
  cardDate.innerHTML = this.value;
});

const dateInputYear = document.querySelector(".cardDate-inputYear");
const cardDate1 = document.querySelector(".credit-card-front .cardDate .year");

dateInputYear.addEventListener("input", function (e) {
  cardDate1.innerHTML = this.value;
});

// ! Card Date End ! \\
