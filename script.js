let countdownInterval;

function generateIframes() {
  const url = document.getElementById("url").value;
  const count = parseInt(document.getElementById("iframeCount").value);
  const durationMinutes = parseInt(document.getElementById("duration").value);
  const container = document.getElementById("iframeContainer");
  const timerDisplay = document.getElementById("timer");
  const progressBar = document.getElementById("progress");

  if (!url || !count || !durationMinutes) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  container.innerHTML = "";
  clearInterval(countdownInterval);

  for (let i = 0; i < count; i++) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    container.appendChild(iframe);
  }

  const totalSeconds = durationMinutes * 60;
  let remainingSeconds = totalSeconds;

  countdownInterval = setInterval(() => {
    remainingSeconds--;
    const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
    const seconds = String(remainingSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;

    const progressPercent = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    progressBar.style.width = `${progressPercent}%`;

    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      container.innerHTML = "";
      alert("Süre doldu. Tüm iframe'ler kapatıldı.");
    }
  }, 1000);
}
