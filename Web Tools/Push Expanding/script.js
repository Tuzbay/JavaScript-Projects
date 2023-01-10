const panels = document.querySelectorAll(".panel");
const small = document.querySelector("small");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    small.style.transform = "scale(1.5)";
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
