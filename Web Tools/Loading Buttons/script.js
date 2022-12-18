const searchButton = document.querySelector("#search-button");
const searchButtonContent = document.querySelector("#search-button div");

searchButton.addEventListener("click", toggle);

// Aşağıdaki fonksiyonda butona tıkladığımızda loading class'ı verir. Loading class'ı ile butonda "Search" yazısı kalkar ve loading simgesi dönmeye başlar. Bu olaydan 3 saniye sonra loading class'ı silinir ve "Search" yazısı tekrardan ortaya çıkar.

function toggle() {
  searchButtonContent.classList.add("loading");
  setTimeout(() => {
    searchButtonContent.classList.remove("loading");
  }, 3000);
}
