const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button"),
  img = document.querySelector("img");

let alarmTime;
let isAlarmSet = false;
ringtone = new Audio("./Alarm-clock-bell-ringing-sound-effect.mp3"); // * Alarm çaldığında duyulacak zil sesi

for (let i = 24; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option); // * Saat bölümünde yer alan 24 sayı
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option); // * Dakika bölümünde yer alan 60 sayı
}

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();

  h = h == 0 ? (h = 24) : h;
  h = h < 10 ? "0" + h : h; // * Bu satırlar rakamların önüne 0 koyar.
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} `; // * Mevcut saat bu kod ile ekranda gösterilmektedir.

  // * Alarm saati ile local saat eşleştiğinde bu if bloğu çalışmaktadır.
  if (alarmTime === `${h}:${m}`) {
    ringtone.play();
    ringtone.loop = true;
    img.src =
      "./alarm-clock-icon-alarm-clock-that-sounds-loudly-morning-wake-up-from-bed_68708-698.webp";
    img.style.animation = "clock 10s linear";
  }
});

// * setAlarm fonksiyonunda başlangıçta isAlarmSet false değerindedir. O yüzden aşağıdaki komutlar çalışır. Alarm kurulduktan sonra isAlarmSet true değerine sahiptir ve bir daha tıklandığında if bloğu içindeki komutları çalıştırır.

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  // * Aşağıdaki komut satırı ile birlikte alarm bölümünde saat ve dakika alanında bir değer seçilmemişse uyarı verir.
  let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (time.includes("Hour") || time.includes("Minute")) {
    return alert("Please, select a valid time to set Alarm!");
  }
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);
