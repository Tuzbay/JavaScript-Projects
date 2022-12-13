// Bug Arada sırada ilk invaderi atlayıp, arkasındakini vuruyor. Onu incele.
// FixMe --> Kullanıcı adı, skorların kayıt edilmesi, level sistemi ve daha güzel bir arayüz eklenebilir.

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".result");
let currentShooterIndex = 202; // Shooter'ın başlangıç konumu
let width = 15; // Bir satırdaki div sayısı (Yatayda ve düşeyde 15er div bulunmaktadır.)
let direction = 1; // Aliensların hareketi için kullandığımız bir değişken
let invadersId; // setInterval tanımlayacağız.
let goingRight = true;
let aliensRemoved = []; // Silinen ailenslar bu arrayin içine gelecek.
let results = 0;

// 300px genişliğinde ve uzunluğundaki ana bölüme 20şer pxlik kareler yerleştiriyoruz. Totalde 225 adet alan oluşuyor. O alanlar aşağıdaki kod satırı ile oluşturuluyor.
for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div")); // Array.from ile nodeListleri Array formatına çevirdik. querySelector ile seçtiğimiz için nodelist sonucu döndürür. Eğer classname veya tagname ile erişseydik html collection sonucu verecekti.

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

const draw = () => {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add("invader"); //Burada yukarıda belirttiğimiz alienslere invader class'ı atıyoruz. Bu sayede onları webde görünür kılıyoruz.
    }
  }
};

draw();

const remove = () => {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader");
  }
};

squares[currentShooterIndex].classList.add("shooter");

// Atıcının ilerlemesini sağlayan fonksiyon
const moveShooter = (e) => {
  squares[currentShooterIndex].classList.remove("shooter"); // Fonksiyon çalıştığında öncelikle mevcut indexdeki shooter siliniyor.
  switch (
    e.key // Switch yapısı ile klavye kullanımını sağlıyoruz. e.keyCode diyip integer değerlerini de girebilirsin. Örneğin space için e.keyCode case 32:
  ) {
    case "ArrowLeft": // if'ler direkt true olursa köşeye gittiklerinde bir üst satıra veya bir alt satıra geçerler. Bunu engellemek için if kullanılmıştır.
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1; // En sol divin indexi 195dir. 195 / 15 yaptığımızda sonuç 0 olacağı için if bloğu true olmaz ve çalışmaz.
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1; // Matematiksel bir olay. En sol divde kalan 0, en sağ divde kalan 14. 14 olduğunda eklemeyi bırakıyor ve sütunlar arası hareket engelleniyor.
      break;
  }

  squares[currentShooterIndex].classList.add("shooter"); // Bu satırda da ok tuşlarına bastıktan sonra hemen shooter ekleniyor.
};

document.addEventListener("keydown", moveShooter);

const moveInvaders = () => {
  const leftEdge = alienInvaders[0] % width === 0; // 0-15-30 diye gittiği için sol taraftaki divler, bunların 15 ile bölümünden kalan 0 olacaktır. O zamanda sol köşe tanımlanmış olur.

  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1; // Biz alienInvaders ile birlikte divlerin indexlerini belirterek onlara class atadık. Bu index değerleri bu divler hareket ettikçe değişecektir. Örneğin 39 indexli div bir sağ kaydığında 40 olmaktadır. Bu şekilde en sağ köşeye gittiğinde 44. indexli div olur. Kalan burada 14tür. Bu sayede de rightEdge = true olarak görünür.

  remove();

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1; // Diğer tarafa gideceği için değiştirmemiz gerekiyor.
      goingRight = false; // Diğer tarafa yöneleceği için if'in false çıkıp buranın iptal olmasını sağlıyoruz.
    }
  }

  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1; // Diğer tarafa gideceği için değiştirmemiz gerekiyor.
      goingRight = true; // Diğer tarafa yöneleceği için if'in false çıkıp buranın iptal olmasını sağlıyoruz.
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }
  console.log(alienInvaders[0]);
  draw();

  // Aşağıdaki if alienslar shootere çarpınca oyunun bitmesini sağlar.
  if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
    resultDisplay.innerHTML = "GAME OVER";
    clearInterval(invadersId);
  }
  // Shootera çarpmadan giderse oyun biter.
  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length - 2 * width) {
      resultDisplay.innerHTML = "GAME OVER";
      clearInterval(invadersId);
    }
  }
  // Alienslar biterse kazanırsınız.
  if (aliensRemoved.length === alienInvaders.length) {
    resultDisplay.innerHTML = "YOU WIN";
    clearInterval(invadersId);
  }
};

invadersId = setInterval(moveInvaders, 400);

const shoot = (e) => {
  let laserId;
  let currentLaserIndex = currentShooterIndex;
  // Laserin ilerlemesi aşağıda görünmektedir.
  const moveLaser = () => {
    squares[currentLaserIndex].classList.remove("laser");
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add("laser");
    // Aşağıdaki if bloğu sayesinde invader varsa laser ve invader classları silinip boom classı eklenir.
    if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("laser");
      squares[currentLaserIndex].classList.remove("invader");
      squares[currentLaserIndex].classList.add("boom");
      // Aşağıdaki kod sayesinde 3 salise sonra boom classı da silinir.
      setTimeout(
        () => squares[currentLaserIndex].classList.remove("boom"),
        300
      );
      clearInterval(laserId);
      // Aşağıdaki kod ile sonucu hesaplarız. Ayrıca aliensların silinmesini sağlarız.
      const alienRemoval = alienInvaders.indexOf(currentLaserIndex);
      aliensRemoved.push(alienRemoval);
      results++;
      resultDisplay.innerHTML = results;
    }
  };
  switch (e.key) {
    case "ArrowUp":
      laserId = setInterval(moveLaser, 100);
  }
};

document.addEventListener("keydown", shoot);
