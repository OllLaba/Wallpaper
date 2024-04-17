const leftbutton = document.getElementById("leftbuttonimg");
const rightbutton = document.getElementById("rightbuttonimg");

let mainimg = document.getElementById("mainimg");
let leftimg = document.getElementById("lastimg");
let rightimg = document.getElementById("secondimg");
let imgNumber = mainimg.src.slice(-7,-5);
function number() {
    if (mainimg.src.slice(-7,-6) == "/") {
        imgNumber = Number(mainimg.src.slice(-6,-5))
    } else imgNumber =  Number(mainimg.src.slice(-7,-5))
}
function leftbut(el) {
    if (el != 1  && el != 2) {
    mainimg.src = "img/all/"+ `${el - 1}` + ".webp";
    leftimg.src = "img/all/" + `${el - 2}` + ".webp";
    rightimg.src = "img/all/" + el + ".webp";
    } else if (el == 1) {
        mainimg.src = "img/all/15.webp";
        leftimg.src = "img/all/14.webp";
        rightimg.src = "img/all/1.webp";
    } else if (el == 2) {
        mainimg.src = "img/all/1.webp";
        leftimg.src = "img/all/15.webp";
        rightimg.src = "img/all/2.webp";
    }
}

function rightbut(el) {
    if (el != 15  && el != 14) {
    mainimg.src = "img/all/"+ `${el + 1}` + ".webp";
    leftimg.src = "img/all/" + el + ".webp";
    rightimg.src = "img/all/" + `${el + 2}` + ".webp";
    } else if (el == 15) {
        mainimg.src = "img/all/2.webp";
        leftimg.src = "img/all/1.webp";
        rightimg.src = "img/all/15.webp";
    } else if (el == 14) {
        mainimg.src = "img/all/15.webp";
        leftimg.src = "img/all/14.webp";
        rightimg.src = "img/all/1.webp";
    }
}
 
leftbutton.addEventListener("click", () => {
    number()
    leftbut(imgNumber)
});

rightbutton.addEventListener("click", () => {
    number()
    rightbut(imgNumber)
})


