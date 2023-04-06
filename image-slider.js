const rightArrow = document.getElementById("rightArrow");

function moveRight () {
    const images = document.getElementsByClassName("images");
    const arrayOfImages = Array.from(images);
    console.log(arrayOfImages);
    arrayOfImages.forEach((item) => {
        const countOccurrences = function(arr, val) {
            return arr.reduce((acc, elem) => (val === elem ? acc + 1 : acc), 0);
          };
        
        if (countOccurrences(arrayOfImages, arrayOfImages.indexOf(item)) === 0) {
            item.style.display = "block";
            arrayOfImages.forEach((item, 0))
            }
            else if (countOccurrences(arrayOfImages, arrayOfImages.indexOf(item)) === 1) {
                    item.style.display = "none";
                    }
    })
};

rightArrow.addEventListener("click", () => {
    moveRight();
});

// function toggleDisplayDivs() {
//     const dropDivs = document.getElementsByClassName("dropDivs");
//     const arrayOfDropDivs = Array.from(dropDivs);
//     arrayOfDropDivs.forEach((item) => {
//         if (item.style.display === "none") {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
    
// };

// menuDiv.addEventListener("click", () => {
//     toggleDisplayDivs();
// });