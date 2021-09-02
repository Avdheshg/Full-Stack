const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

/* === Function Definitions ==  */
// Toggle video status
function toggleVideoStatus() {
    // Will use the build in video API functions of HTML5
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the play icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

// called when we click on the range of the video player
function updateProgress() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    /* == Getting the min and sec === */
    // Mins
    let min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        min = '0' + String(min);
    }

    // sec
    let sec = Math.floor(video.currentTime % 60);
    // console.log('currentTime ' , video.currentTime);
    if (sec < 10) {
        sec = `0` + String(sec);
    }

    // Updating the HTML time stamp(which will tell how much time is left)
    timestamp.innerHTML = `${min}:${sec}`;
}

// setting the video progress
function setVideoProgress() {
    console.log( +progress.value);
    video.currentTime = (+progress.value * video.duration) / 100;
}

// stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);







































