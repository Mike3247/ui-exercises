const menuNav = document.getElementById("menu");
const homeNav = document.getElementById("home");
const aboutNav = document.getElementById("about");
const contactNav = document.getElementById("contact");
menuNav.addEventListener("click", () => {
    homeNav.style.visibility = "visible";
    contactNav.style.visibility = "visible";
    aboutNav.style.visibility = "visible";
});
