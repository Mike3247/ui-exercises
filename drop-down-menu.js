const menuDiv = document.getElementById("menu");
// const homeNav = document.getElementById("home");
// const aboutNav = document.getElementById("about");
// const contactNav = document.getElementById("contact");
// const dropdownNavs = document.getElementsByClassName("dropdown");
// const arrayOfDropdownNavs = Array.from(dropdownNavs);

function toggleDisplayHome() {
    const homeDiv = document.getElementById("home");
    if (homeDiv.style.display === "none") {
        homeDiv.style.display = "block";
    } else {
        homeDiv.style.display = "none";
    }
};

menuDiv.addEventListener("click", () => {
    toggleDisplayHome();
});