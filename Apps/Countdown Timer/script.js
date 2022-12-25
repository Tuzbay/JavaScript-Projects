// FixMe LocalStorage kayıt özelliğini tamamla.
// FixMe Important Days'de zamanı geçen günleri sil ve bir sonrakini ilave et. :nth child ile yapabilirsin.

const content = document.getElementById("title");
const form = document.querySelector("form");
const button = document.getElementById("setTimer");
let inputName = document.getElementById("input-name");
const countdownTimer = document.getElementById("countdown");
let inputDate = document.getElementById("input-date");
const titleSm = document.getElementById("title-small");
const h3 = document.getElementById("h3");
const stopTimer = document.getElementById("stopTimer");
const beforeCountdown = document.getElementById("before-countdown");

// ! TABLO BAŞLANGICI
// * Tabloda milli ve dini bayramlar yer almaktadır. Bu tablodaki isimlere tıkladığınızda o günün geri sayımı başlamaktadır.
// * Bunu yapan kod grubu aşağıda bulunmaktadır.

const newYearsEve = document.getElementById("newYearsEve");
newYearsEve.addEventListener("click", () => {
  inputName.value = "New Years Eve";
  inputDate.value = "2023-01-01";
  countdown();
});

const ramadan = document.getElementById("Ramadan");
ramadan.addEventListener("click", () => {
  inputName.value = "Ramadan Feast";
  inputDate.value = "2023-04-21";
  countdown();
});

const national = document.getElementById("National");
national.addEventListener("click", () => {
  inputName.value = "National Sovereignty and Children's Day";
  inputDate.value = "2023-04-23";
  countdown();
});

const labor = document.getElementById("Labor");
labor.addEventListener("click", () => {
  inputName.value = "Labor and Solidarity Day";
  inputDate.value = "2023-05-01";
  countdown();
});

const commemoration = document.getElementById("Commemoration");
commemoration.addEventListener("click", () => {
  inputName.value = "Commemoration of Ataturk, Youth and Sports Day";
  inputDate.value = "2023-05-19";
  countdown();
});

// ! TABLO BİTİŞİ
// ? ------------------------------ ? //
// ! formatTime FONKSİYONU BAŞLANGICI
// * Bu fonksiyonda gün, saat, dakika ve saniye geri sayımında 10'dan küçük değerler için sol tarafına sıfır koyar.
// * 10 değerinden büyük olanlar olduğu gibi gösterilir. Kısacası 2 karakterli gösterim kullanılmaktadır.

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// ! formatTime FONKSİYONU BİTİŞİ
// ? ------------------------------ ? //
// ! countdown FONKSİYONU BAŞLANGICI

const countdown = (e) => {
  // * Aşağıdaki kısımda başlığı contente eklenir ve input bölümü görünümden kaldırılır.
  content.innerText = inputName.value;
  form.style.display = "none";
  titleSm.style.display = "none";

  // * Bu bölümde boş div içinde buradaki html kodları yazılır. Bu kodlarda gün, saat, dakika ve saniye görselleri ekrana gelir.
  countdownTimer.innerHTML = `
      <div class="countdown-el days-container">
        <p class="big-text" id="days">0</p>
        <span>days</span>
      </div>
      <div class="countdown-el hours-container">
        <p class="big-text" id="hours">0</p>
        <span>hours</span>
      </div>
      <div class="countdown-el minutes-container">
        <p class="big-text" id="minutes">0</p>
        <span>minutes</span>
      </div>
      <div class="countdown-el seconds-container">
        <p class="big-text" id="seconds">0</p>
        <span>seconds</span>
      </div>
      
  `;
  // * Ayrıca gerisayımı durduracak stop butonu aktif hale gelir.
  stopTimer.innerHTML = `
  <button id="stopTimer" class="countdown-button">
    Finish the Countdown
  </button>
  `;

  // * Aşağıdaki 4 seçim ile site içindeki değiştirmek istediğim değerlere ulaşırız.

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const chooseTime = new Date(inputDate.value); // * Bu satırda Countdown to Date bölümündeki tarih alınır.
  const current = new Date(); // * Şu an localde bulunulan zaman alınır.

  const totalsec = (chooseTime - current) / 1000 - 10800; // * Bu zamanlar birbirinden çıkarılarak 1000'e bölünür ve aralarındaki toplam saniye bulunur. 3 saat zaman farkından dolayı manuel olarak 3 saat'in saniye değeri olan 10800 çıkarılır.
  const days = Math.floor(totalsec / 3600 / 24); // * Bulunan toplam saniye güne çevrilir.
  const hours = Math.floor((totalsec / 3600) % 24); // * Bulunan toplam saniye saate çevrilir.
  const minutes = Math.floor((totalsec / 60) % 60); // * Bulunan toplam saniye dakikaya çevrilir.
  const seconds = Math.floor(totalsec % 60); // * Bulunan toplam saniye  güne çevrilir.

  // * Yukarıda formatTime fonksiyonu açıklanmıştır.
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  // * Fonksiyon içinde her saniye butona basılarak fonksiyon tekrar tekrar çalıştırılmaktadır. Bu sayede geri sayım devam etmektedir.
  setInterval(function () {
    button.click();
  }, 1000);
};

// ! countdown FONKSİYONU BİTİŞİ
// ? ------------------------------ ? //
// ! addEventListener BAŞLANGICI

// * Aşağıdaki "Set Time" butonuna basıldığında countdown fonksiyonu çalışır ve geri sayım başlar.
button.addEventListener("click", () => {
  if (inputName.value === "" && inputDate.value === "") {
    h3.innerText = "Please fill the gaps.";
  } else {
    h3.innerText = "";
    countdown();
  }
});

// * Geri sayım başladıktan sonra sayfa yenilenerek geri sayım durdurulur.
stopTimer.addEventListener("click", () => {
  window.location.reload();
});

// ! addEventListener BİTİŞİ
