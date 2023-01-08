const searchButton = document.querySelector("#search-button");
const searchButtonContent = document.querySelector("#search-button div");
const searchButton2 = document.querySelector("#search-button-2");
const loading1 = document.querySelector(".loading1");
const line = document.querySelector(".line");

searchButton.addEventListener("click", toggle);
searchButton2.addEventListener("click", topTotal);

// Aşağıdaki fonksiyonda butona tıkladığımızda loading class'ı verir. Loading class'ı ile butonda "Search" yazısı kalkar ve loading simgesi dönmeye başlar. Bu olaydan 3 saniye sonra loading class'ı silinir ve "Search" yazısı tekrardan ortaya çıkar.

function toggle() {
  searchButtonContent.classList.add("loading");
  setTimeout(() => {
    searchButtonContent.classList.remove("loading");
  }, 3000);
}

function toggle2() {
  loading1.style.visibility = "visible";
  line.style.animation = "loading 5s forwards cubic-bezier(0, 0, 0, 0)";
  searchButton2.style.visibility = "hidden";
}

function button2() {
  loading1.style.visibility = "hidden";
  searchButton2.style.visibility = "visible";
}

function total2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(button2());
    }, 5300);
  });
}

async function topTotal() {
  toggle2();
  const result = await total2();
}
