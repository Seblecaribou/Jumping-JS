let titleScreen = true;

const pushItToTheLimit = document.getElementsByTagName("audio")[0];
const MuteButton = document.getElementById("muteButton");

const TitleScreenWindow = document.getElementsByClassName("TitleScreen")[0];
const GameWindow = document.getElementsByClassName("Game")[0];
const GameOver = document.getElementsByClassName("GameOver")[0];

const Player = document.getElementById("Player");
const Obstacle = document.getElementById("Obstacle");

let score = 0;
const scoreSpan = document.getElementById("scoreSpan");
const finalScore = document.getElementById("finalScore");

function OnClick() {
  if (titleScreen) {
    Start();
  } else {
    Jump();
  }
}

function Start() {
  titleScreen = false;
  TitleScreenWindow.style.display = "none";
  GameWindow.style.display = "block";
}

function Jump() {
  if (Player.classList == "jumping") {
    return;
  }
  Player.classList.add("jumping");
  setTimeout(() => {
    Player.classList.remove("jumping");
  }, 500);
}

setInterval(function handleCollide() {
  if (!titleScreen) {
    if (CheckForCollision()) {
      GameIsOver();
    }
  }
}, 1000 / 60);

function CheckForCollision() {
  let playerTopValue = parseInt(
    window.getComputedStyle(Player).getPropertyValue("top")
  );
  let obstacleLeftValue = parseInt(
    window.getComputedStyle(Obstacle).getPropertyValue("left")
  );
  if (
    obstacleLeftValue < 25 &&
    obstacleLeftValue > -75 &&
    playerTopValue >= 132
  ) {
    return true;
  } else {
    IncrScore();
  }
}

function GameIsOver() {
  const lastScore = Math.floor((score - 1) / 60);
  finalScore.innerHTML = `You scored ${lastScore} points!`;
  GameOver.style.display = "block";
  GameWindow.style.display = "none";
  scoreSpan.style.display = "none";
}

function IncrScore() {
  score += 1;
  scoreSpan.innerHTML = "Score: " + Math.floor(score / 60);
}

// let isMute = false;
// function Mute(event) {
//   event.preventDefault();
//   if (!isMute) {
//     MuteButton.src = "./src/soundmuted.png";
//     pushItToTheLimit.volume = 0;
//   } else {
//     MuteButton.src = "./src/soundmute.png";
//     pushItToTheLimit.volume = 0.2;
//   }
// }
