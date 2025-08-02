const countdownEl = document.getElementById("countdown");
const weddingDate = new Date("Sep 27, 2025 17:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Dočekali :)";
  } 
  else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  countdownEl.style.visibility = "visible";
}

updateCountdown();
setInterval(updateCountdown, 1000);
