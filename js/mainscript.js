import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    const vid = document.getElementById("video");

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        
        { seconds: 10, callback: func1 },
        { seconds: 36, callback: func2 },
        { seconds: 63, callback: func3 },
        { seconds: 64, callback: func4 },
        { seconds: 35, callback: func5 },
        { seconds: 107, callback: func6 },
        { seconds: 165, callback: func7 },
    
    ];

    // setup the cuepoint timer
    cueTimer.setup(vid, myCues);

    
}



function func1() {
    let display = document.querySelector(".show");
    display.classList.remove("hide");
    setTimeout(() => {
        document.querySelector(".show").classList.toggle("hide");
    }, 22000);


     console.log(display);
}

function func2() {
    let display = document.querySelector(".album");
    display.classList.remove("hide");
    setTimeout(() => {
        document.querySelector(".album").classList.toggle("hide");
    }, 25000);
    
    console.log(display);
}

function func3() {
    let display = document.querySelector(".notes");
    display.classList.remove("hide");
    setTimeout(() => {
        document.querySelector(".notes").classList.toggle("hide");
    }, 25000);
    
    console.log(display);
}

function func4() {
    let display = document.querySelector(".piano");
    let videoPiano = document.querySelector(".video2").muted = true;
    display.classList.remove("hide");
    document.querySelector(".video2").muted = true;
    setTimeout(() => {
        document.querySelector(".piano").classList.toggle("hide");
    }, 25000);
    
    console.log(display);
}

function func5() {
    document.body.style.background = "#242425";
    let backgroundColor = document.querySelector(".album");
    backgroundColor.style.background = "#242425";
    backgroundColor.style.color = "#fff";
    document.querySelector(".titulo").style.color = "#fff";
}

function func6() {
    let display = document.querySelector(".oficial");
    document.querySelector(".video").muted =true;
    let videoOficial = document.querySelector(".video3");
    display.classList.remove("hide");
    
    document.querySelector(".video3").currentTime = 171.50;
    setTimeout(() => {
        document.querySelector(".oficial").classList.toggle("hide");
    }, 90000);
    
    console.log(display);
}

function func7() {
    
    document.querySelector(".video").muted =false;
    let videoOficial = document.querySelector(".video3").muted =true;
    
    
    
    
    console.log(display);
}





// function func3() {
//     let display = document.querySelector(".love");
//     display.classList.remove("hide");
//     setTimeout(() => {
//         document.querySelector(".love").classList.toggle("hide");
//     }, 4000);
    

//     console.log(display);
// }

