// Déclaration des variables
let startTime; // Heure de démarrage du chronomètre
let running = false; // Indique si le chronomètre est en cours d'exécution
let elapsedTime = 0; // Temps écoulé depuis le démarrage en millisecondes
let timerInterval; // Identifiant de l'intervalle de mise à jour du chronomètre

// Éléments DOM
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');
const hoursElement = document.getElementById('h');
const minutesElement = document.getElementById('m');
const secondsElement = document.getElementById('s');

// Fonction de formatage du temps
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  };
}

// Fonction de démarrage du chronomètre
function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
  }
}

// Fonction de mise à jour de l'affichage du chronomètre
function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);

  hoursElement.textContent = formattedTime.hours;
  minutesElement.textContent = formattedTime.minutes;
  secondsElement.textContent = formattedTime.seconds;
}

// Fonction de pause du chronomètre
function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
    pauseButton.value = 'Reprendre';
  } else {
    startTimer();
    pauseButton.value = 'Pause';
  }
}

// Fonction d'arrêt et de remise à zéro du chronomètre
function stopTimer() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  const formattedTime = formatTime(elapsedTime);
  hoursElement.textContent = formattedTime.hours;
  minutesElement.textContent = formattedTime.minutes;
  secondsElement.textContent = formattedTime.seconds;
  pauseButton.value = 'Pause';
}

// Écouteurs d'événements pour les boutons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
