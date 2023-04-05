const menuDiv = document.getElementById("menu");

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