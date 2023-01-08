const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
// Aşağıdaki satırlarda yılı ve ayı belirliyoruz. Sonrasında tüm ayları bir array içine alıyoruz.
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // ! Burada bulunduğumuz yılın 1. gününü alıyoruz. Sonuç 0 olarak dönüyor. Yani Pazar günü...
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // ! Son değer 0 olduğu için 2. ayın bir gün öncesini alıyoruz. Yani geçtiğimiz ayın son gününü bulmuş oluyoruz.
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // ! Bulduğumuz son günün hangi günde olduğunu buluyoruz.
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // ! Bir önceki ayın son gününü buluyoruz.
  let liTag = "";

  // ! Aşağıdaki kod satırında bir önceki ayın son günleri yazılır.
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  // ! Bulunduğumuz günün işaretlenmesi için kontrolleri aşağıdaki kod satırı ile yapıyoruz.
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  // ! Aşağıdaki kod satırında bir sonraki ayın ilk günleri yazılır.
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  // ! Aşağıdaki kod satırında takvimin sol üst köşesindeki kısmın kodu vardır.
  currentDate.innerText = ` ${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();
// ! Aşağıdaki kod satırlarında takvimin sağ üstündeki iconlar aktif edilmiştir.
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    // ! Aşağıdaki kod satırında takvimin sol üst tarafı butonlara basıldıkça güncellenmektedir.
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
