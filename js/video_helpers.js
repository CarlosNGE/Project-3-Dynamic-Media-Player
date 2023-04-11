document.addEventListener('DOMContentLoaded', init);
var myCues;
function init() {


const video = document.querySelector('.video');

        document.getElementById('play').addEventListener('click', (e)=>{
            video.play();
        });

        document.getElementById('pause').addEventListener('click', (e)=>{
            video.pause();

        });

        document.getElementById('stop').addEventListener('click', (e)=>{
            video.pause();
            video.currentTime = 0;
        });

        document.getElementById('mute').addEventListener('click', (e)=>{
            video.muted = true;
            
        });

        document.getElementById('unmute').addEventListener('click', (e)=>{
            video.muted = false;
            
        });

        
        console.log(video);

       

    }