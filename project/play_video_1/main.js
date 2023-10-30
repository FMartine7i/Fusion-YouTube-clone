//video player
const theaterMode = document.querySelector('.theater__btn')
const blurOverlay = document.querySelector('.blur-overlay')
const video = document.querySelector('video')
const playBtn = document.querySelector('.play__btn')
const videoControls = document.querySelector('.controls-container')
const videoContainer = document.querySelector('.play-video')

let isTheaterModeActive = false;

// progress bar
const progressBar = document.querySelector('.progress__filled');
const progressBlur = document.querySelector('.progress__blur')
const progressBarContainer = document.querySelector('.progress-container');

//volume button
const volumeBtn = document.querySelector('.volume__btn')
const pauseIcon = document.querySelector('.pause_icon')
const playIcon = document.querySelector('.play_icon')
const volumeOnIcon = document.getElementById('volume-on')
const volumeOffIcon = document.getElementById('volume-off')
const volumeSlider = document.querySelector('.volume__slider');

let isMuted = false;
let lastVolume = 1;

// buttons
const btn = document.querySelector('.settings__btn')


//theater mode
theaterMode.addEventListener('click', () => {
    isTheaterModeActive = !isTheaterModeActive;

    if (isTheaterModeActive) {
        blurOverlay.style.display = 'block';
        video.classList.add('video-filtered');
    } else {
        blurOverlay.style.display = 'none';
        video.classList.remove('video-filtered');
    }
})

//player controls
videoContainer.addEventListener('mouseenter', () => {
    // Mostrar los controles cuando el mouse entra en el video
    videoControls.style.opacity = 1;
    clearTimeout(hideControlsTimeout);
});

videoContainer.addEventListener('mouseleave', () => {
    // Ocultar los controles cuando el mouse sale del video
    if (!video.paused) {
        hideControlsTimeout = setTimeout(() => {
            videoControls.style.opacity = 0;
        }, 2000);
    }
});

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = "none"
        pauseIcon.style.display = "block"
    }
    else{
        video.pause();
        playIcon.style.display = "block"
        pauseIcon.style.display = "none"
    }
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft'){
        video.currentTime -= 5;
    }
    else if(e.key === 'ArrowRight'){
        video.currentTime += 5;
    }
    else if(e.key === ' '){
        e.preventDefault();
        
        if(video.paused){
            video.play()
            playIcon.style.display = "none"
            pauseIcon.style.display = "block"
        }
        else{
            video.pause();
            playIcon.style.display = "block"
            pauseIcon.style.display = "none"
        }
    }
})

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = "none"
        pauseIcon.style.display = "block"
    } else {
        video.pause();
        playIcon.style.display = "block"
        pauseIcon.style.display = "none"
    }

    videoControls.style.opacity = 1;
    clearTimeout(hideControlsTimeout);
})

function updateProgressBar() {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progress = (currentTime / duration) * 100;
    const progress_blur = (currentTime / duration) * 95
    progressBar.style.width = progress + '%';
    progressBlur.style.width = progress_blur + '%'; 
}

progressBarContainer.addEventListener('click', (e) => {
    const clickX = e.clientX - progressBarContainer.getBoundingClientRect().left;
    const progressBarWidth = progressBarContainer.offsetWidth;
    const seekTime = (clickX / progressBarWidth) * video.duration;
    video.currentTime = seekTime;
});

video.addEventListener('timeupdate', updateProgressBar);

volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    video.volume = volumeValue;
    if (volumeValue === "0") {
        video.muted = true;
        isMuted = true;
        volumeOffIcon.style.display = "block";
        volumeOnIcon.style.display = "none"
    } else {
        video.muted = false;
        isMuted = false;
        volumeOffIcon.style.display = "none";
        volumeOnIcon.style.display = "block"
        lastVolume = volumeValue;
    }
});

volumeOffIcon.addEventListener('click', () => {
    video.muted = false;
    isMuted = false;
    volumeOffIcon.style.display = "none";
    volumeOnIcon.style.display = "block"
    video.volume = lastVolume;
    volumeSlider.value = lastVolume;
})

volumeOnIcon.addEventListener('click', () => {
    lastVolume = video.volume;
    video.muted = true;
    isMuted = true;
    volumeOffIcon.style.display = "block";
    volumeOnIcon.style.display = "none"
})

btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left
    btn.style.setProperty('--x', x + 'deg')
})

/* -------------------- Fullscreen ---------------- */ 
const fullscreenButton = document.querySelector('.screen__btn')

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Manejar el clic en el botón de pantalla completa
fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen(videoContainer);
    }
});

// Escuchar eventos de cambio en el modo de pantalla completa
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // El modo de pantalla completa se ha desactivado
    }
});

