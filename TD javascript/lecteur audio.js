//on recupere tous les elements necessaires
const audio = document.querySelector("audio");
const track = document.querySelector("#track");
const elapsed = document.querySelector("#elapsed");
const trackTime = document.querySelector("#track-time");
const playButton = document.querySelector("#play-button");
const pauseButton = document. querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volume = document.querySelector("#volume");
const volumeValue = document.querySelector("#volume-value");

//on recupere la duree du mp3
let duration = audio.duration;

trackTime.textContent=buildDuration(duration);

//on gere le bouton play
playButton.addEventListener("clik", function(){
    audio.play();
    pauseButton.Style.display = "initial";
    stopButton.style.display = "initial";
    this.style.display = "none";
});

//on gere le bouton pause
pauseButton.addEventListener("clik", function(){
    audio.pause();
    playButton.style.display = "initial";
    this.style.display = "none";
});

//on gere le bouton stop
stopButton.addEventListener("clik", function(){
    audio.stop();
    audio.currentTime = 0;
    playButton.Style.display = "initial";
    pauseButton.style.display = "none";
    this.style.display = "none";
});

audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
    elapsed.textContent = buildDuration(this.currentTime);
});
track.addEventListener("input", function(){
    elapsed.textContent = buildDuration(this.value);
    audio.currentTime = this.value;
});

volume.addEventListener("input", function(){
    audio.volume = this.value;
    volumeValue.textContent = this.value * 100 + "%";
});

function buildDuration(duration) {
    let minutes = Math.floor(duration / 60);
    let reste = duration % 60;
    let secondes = Math.floor(reste);
    secondes = String(secondes).padStart(2, "0");
    return minutes + ":" + secondes;
}