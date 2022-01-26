const nav = document.querySelector(".nav");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", (e) => {
   toggler.classList.toggle("active");
   nav.classList.toggle("active");
});
