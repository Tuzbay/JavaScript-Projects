const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; // ! Yukarıdaki sıralamaları gösteren kod bloğu.
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;

      function preview() {
        currentImg.textContent = newIndex + 1; // ! Yukarıdaki sıralamaları gösteren kod bloğu.
        let selectedImgUrl = gallery[newIndex].querySelector("img").src; // ! Bu kod bloğu ile tıklanan resmin source kodunu alırız.
        previewImg.src = selectedImgUrl; // ! Bu kod bloğu ile img source kısmına yukarıda tıkladığımızda aldığımız url kodunu tanımlarız.
      }
      // ! Aşağıdaki tanımlamalarda ileri ve geri butonları tanımlanmıştır.
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      if (newIndex == 0) {
        prevBtn.style.display = "none"; // ! İndeks 0'a eşitse prev butonu gösterme.
      }

      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none"; // ! İndeks son resme aitse eşitse next butonu gösterme.
      }
      // ! Tanımlanan kod bloklarına fonksiyonları atarız.
      prevBtn.onclick = () => {
        newIndex--; // ! İndexi düşür
        if (newIndex == 0) {
          preview(); // ! Düşürdükten sonra tekrar çağır.
          prevBtn.style.display = "none"; // ! İndeks sıfıra geldiğinde daha geri gidilemeyeceği için buton kaldırılır.
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      // ! Previous butonunda yapılanların aynısı yapılmıştır.
      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";
      // ! Aşağıdaki kod bloğu ile galeri açıldığında çarpı butonuna basıp kapamak için gereken kodlar yazılmıştır.
      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
      };
    };
  }
};
