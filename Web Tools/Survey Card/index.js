const searchButton = document.querySelector(".submit");
const searchButtonContent = document.querySelector("#search-button div");
const textarea = document.querySelector("textarea");
const inputSection = document.querySelector(".input-section");
const response = document.querySelector("#response");

searchButton.addEventListener("click", toggle);

// Aşağıdaki fonksiyonda butona tıkladığımızda loading class'ı verir. Loading class'ı ile butonda "Search" yazısı kalkar ve loading simgesi dönmeye başlar. Bu olaydan 3 saniye sonra loading class'ı silinir ve "Search" yazısı tekrardan ortaya çıkar.

function toggle() {
  searchButtonContent.classList.add("loading");
  textarea.style.opacity = "0.5";
  inputSection.style.opacity = "0.5";
  setTimeout(() => {
    searchButtonContent.classList.remove("loading");
    textarea.style.opacity = "1";
    inputSection.style.opacity = "1";
    response.style.visibility = "visible";
  }, 3000);
}
