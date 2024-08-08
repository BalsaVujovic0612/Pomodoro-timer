let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');
let stopBtn = document.getElementById('stop-btn');
let timer = document.getElementById('timer');

let time = 25 * 60;
let sum = time;
let interval;  // Ovde čuvamo referencu na interval

function updateTime() {
    let minutes = Math.floor(sum / 60);
    let seconds = sum % 60;
    timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    interval = setInterval(() => {
        if (sum > 0) {
            sum--;
            updateTime();
        } else {
            clearInterval(interval);  // Zaustavi interval kada vreme istekne
        }
    }, 1000);
}

function reset() {
    clearInterval(interval);  // Zaustavi trenutni interval
    sum = time;  // Resetuj vreme nazad na 25 minuta
    updateTime();  // Ažuriraj prikaz tajmera
}

function stop() {
    clearInterval(interval);  // Zaustavi interval
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', reset);
stopBtn.addEventListener('click', stop);

updateTime();  // Prikaži početno vreme
