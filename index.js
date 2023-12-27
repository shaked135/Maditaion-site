const buttons=document.querySelectorAll(".maditate");

for (var i=0;i<buttons.length;i++)
    {
    buttons[i].addEventListener("click", function()
    { 
        const buttonInnerHTML=this.textContent.trim();
        maditaionsound(buttonInnerHTML);
    }
    )}

document.addEventListener("keypress",function(event){
    maditaionsound(event.key.toLowerCase());
})

var currentSound; 
//if another key is clicked it will pause and restart the playing video guide
function maditaionsound(key) {
    var videoContainer = document.querySelector('.video-container');
    var closeButton = document.getElementById('closeButton');
    if (document.getElementById('videoplayer').paused === false) {
        document.getElementById('videoplayer').pause();
        document.getElementById('videoplayer').currentTime = 0; 
    }
    if (currentSound) {
        currentSound.pause();
    }
    switch (key) {
        case 'w':
        case 'wild':
            currentSound = new Audio("./sounds/wild-sound.mp3");
            break;
        case 'b' :
        case 'beach':
            currentSound = new Audio("./sounds/beach-sound.mp3");
            break;
        case 's' : 
        case 'storm':
            currentSound = new Audio("./sounds/storm-sound.mp3");
            break;
        case 'd':
        case 'desert':
            currentSound = new Audio("./sounds/strong-desert-wind-155416.mp3");
            break;
        case 'r':
        case 'rain':
            currentSound = new Audio("./sounds/rain-sound.mp3");
            break;
        case 'c': 
        case 'space':
            currentSound = new Audio("./sounds/space-sound.mp3");
            break;
        case 'i':
        case 'illusion':
            currentSound = new Audio("./sounds/illusion-sound.mp3");
            break;
        default:
            alert("try again");
            return; 
    }
    videoContainer.style.display = 'none';
//when the sound is ended the television and button will appear on the screen and start playing
    currentSound.addEventListener('ended', function () {
        videoContainer.style.display = 'block';
        closeButton.style.display = 'block';
        document.getElementById('videoplayer').play();
    });
//the close button will stop the video and make the television and button dissapear when clicked
    closeButton.addEventListener('click', function handleCloseButtonClick() {
        document.getElementById('videoplayer').pause();
        videoContainer.style.display = 'none';
        closeButton.style.display = 'none';
    });

    currentSound.play();
}
//it will take each video-button in maditate and play his video when hover, when he leaves the button, it will pause and restart it.
document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelectorAll('.maditate');
    list.forEach(function (list) {
    const videoBackground = list.querySelector('.video-button');

   
    list.addEventListener('mouseenter', function () {
        videoBackground.play();
    });

    list.addEventListener('mouseleave', function () {
        videoBackground.pause();
        videoBackground.currentTime = 0; 
    });
  });
});



