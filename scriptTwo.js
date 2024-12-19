// Zekr Info
let infoBtn = document.querySelectorAll(".infoBtn");
let sourceHidden = document.querySelectorAll(".sourceHidden");
let doneBtn = document.querySelectorAll(".doneBtn");

for (let g = 0; g < infoBtn.length; g++) {
  infoBtn[g].onclick = function () {
    infoBtn[g].classList.toggle("deactive");
    sourceHidden[g].classList.toggle("active");

    setTimeout(() => {
      doneBtn[g].classList.remove("deactive");
    }, 300);
  };

  doneBtn[g].onclick = function () {
    infoBtn[g].classList.toggle("deactive");
    sourceHidden[g].classList.toggle("active");
    doneBtn[g].classList.add("deactive");
  };
}

// -------------------------------------------------------------

// MENU
const menuToggle = document.querySelector(".menu a"); // زر القائمة
const menuElements = document.querySelector(".menuElements"); // القائمة

let menuBtn = document.querySelector(".menu");
let menuBtnX = document.querySelector(".menuX");

menuToggle.addEventListener("click", () => {
  menuElements.classList.toggle("show"); // إضافة/إزالة كلاس "show"
  menuBtn.classList.toggle("close");
  menuBtnX.classList.toggle("show");
});

menuBtnX.addEventListener("click", () => {
  menuElements.classList.toggle("show"); // إضافة/إزالة كلاس "show"
  menuBtn.classList.toggle("close");
  menuBtnX.classList.toggle("show");
});
