import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    const vid = document.getElementById("video");

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        
        { seconds: 4, callback: func1 },
        { seconds: 7, callback: func2 },
    
    ];

    // setup the cuepoint timer
    cueTimer.setup(vid, myCues);

    
}



function func1() {
    let display = document.querySelector(".show");
    display.classList.remove("hide");

     console.log(display);
}

function func2() {
    document.querySelector("#link").src ="https://www.youtube.com/watch?v=KQu8FOjJXdI";
}


