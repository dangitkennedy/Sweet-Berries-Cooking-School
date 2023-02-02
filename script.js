const hamburger = document.querySelector(".hamburger");
const hamNavMenu = document.querySelector(".ham-nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    hamNavMenu.classList.toggle("active");
}

const hamNavLink = document.querySelectorAll(".ham-nav-link");

hamNavLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    hamNavMenu.classList.remove("active");
}