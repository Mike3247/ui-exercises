const menuDiv = document.getElementById("menu");
// const homeNav = document.getElementById("home");
// const aboutNav = document.getElementById("about");
// const contactNav = document.getElementById("contact");
// const dropdownNavs = document.getElementsByClassName("dropdown");
// const arrayOfDropdownNavs = Array.from(dropdownNavs);

function toggleDisplayDivs() {
    const dropDivs = document.getElementsByClassName("dropDivs");
    const arrayOfDropDivs = Array.from(dropDivs);
    arrayOfDropDivs.forEach((item) => {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    
};

menuDiv.addEventListener("click", () => {
    toggleDisplayDivs();
});