const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
	const now = new Date();
	let christmas = new Date(now.getFullYear(), 11, 25);

	if (now > christmas) {
		christmas = new Date(now.getFullYear() + 1, 11, 25);
	}

	const diff = christmas - now;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	daysEl.textContent = String(days).padStart(2, "0");
	hoursEl.textContent = String(hours).padStart(2, "0");
	minutesEl.textContent = String(minutes).padStart(2, "0");
	secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Songs
let songBtn = document.getElementById("song-button");

const playlist = [
	"songs/we-wish-you-a-merry-christmas.mp3",
	"songs/jingle-bells.mp3",
];

let currentIndex = 0;
const song = new Audio(playlist[currentIndex]);
song.volume = 0.1;
let isPlaying = false;

song.addEventListener("ended", nextSong);

function nextSong() {
	currentIndex = (currentIndex + 1) % playlist.length;
	song.src = playlist[currentIndex];
	song.play();
}

function playSongs() {
	song.play();
	songBtn.innerHTML = '<i class="fa-solid fa-volume"></i>';
}
function stopSongs() {
	song.pause();
	songBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
}

songBtn.addEventListener("click", () => {
	if (isPlaying) {
		stopSongs();
	} else {
		playSongs();
	}
	isPlaying = !isPlaying;
});
