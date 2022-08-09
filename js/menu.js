const toggle = document.querySelector(".hamb-menu"),
nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });