const search = document.querySelector(".search ");
const btn = document.querySelector(".btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  text.focus();
});

const cardT = document.querySelector(".cardT");
const cardSam = document.querySelector(".cardSam");
const cardBux = document.querySelector(".cardBux");
const cardFar = document.querySelector(".cardFar");
const cardNam = document.querySelector(".cardNam");
const cardAnd = document.querySelector(".cardAnd");
const cardSur = document.querySelector(".cardSur");
const cardNav = document.querySelector(".cardNav");
const cardXor = document.querySelector(".cardXor");
const cardQash = document.querySelector(".cardQash");
const cardJiz = document.querySelector(".cardJiz");
const cardSir = document.querySelector(".cardSir");



text.addEventListener("keydown", (e) => {
  if (text.value === "Tashkent" || text.value === "Toshkent") {
    cardT.classList.add("card2");
  }
  if (text.value === "Samarqand" || text.value === "samarqand") {
    cardSam.classList.add("cardS");
  }
  if (
    text.value === "Bukhara" ||
    text.value === "Buxoro" ||
    text.value === "buxoro" ||
    text.value === "Buhoro"
  ) {
    cardBux.classList.add("cardB");
  }
  if (text.value === "Farg'ona" || text.value === "Fargona") {
    cardFar.classList.add("cardF");
  }
  if (text.value === "Namangan" || text.value === "namangan") {
    cardNam.classList.add("cardN");
  }
  if (text.value === "Andijon" || text.value === "andijon") {
    cardAnd.classList.add("cardA");
  }
  if (text.value === "Surhondaryo" || text.value === "Surxondaryo") {
    cardSur.classList.add("cardSu");
  }
  if (text.value === "Navoiy" || text.value === "Navoi") {
    cardNav.classList.add("cardNa");
  }
  if (text.value === "Xorazim" || text.value === "xorazim") {
    cardXor.classList.add("cardXo");
  }
  if (text.value === "Sirdaryo" || text.value === "sirdaryo") {
    cardSir.classList.add("cardSi");
  }
  if (text.value === "Qashqadaryo" || text.value === "Qashqadaryo") {
    cardQash.classList.add("cardQa");
  }
  if (text.value === "Jizzax" || text.value === "jizzax") {
    cardJiz.classList.add("cardJi");
  }

});

// const loadText = document.querySelector(".loading-text");
// const bg = document.querySelector("bg");

// let load = 0;
// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;
//   if (load > 99) {
//     clearInterval(int);
//   }
//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
