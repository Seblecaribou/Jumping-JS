let titleScreen = true;
let gameisover = false;
const pushItToTheLimit = document.getElementsByTagName("audio")[0];
const TitleScreenWindow = document.getElementsByClassName("TitleScreen")[0];
const GameWindow = document.getElementsByClassName("Game")[0];
const GameOver = document.getElementsByClassName("GameOver")[0];
const Player = document.getElementById("Player");
const Obstacle = document.getElementById("Obstacle");
const scoreSpan = document.getElementById("scoreSpan");
const finalCounter = document.getElementsByTagName("p")[1];
let counter = 0;

pushItToTheLimit.volume = 0.2;

function StartOrJump() {
  if (titleScreen) {
    titleScreen = false;
    TitleScreenWindow.style.display = "none";
    GameWindow.style.display = "block";
  } else {
    if (Player.classList == "jumping") {
      return;
    }
    Player.classList.add("jumping");
    setTimeout(() => {
      Player.classList.remove("jumping");
    }, 500);
  }
}

const checkDead = setInterval(function () {
  if (!titleScreen) {
    let playerTopValue = parseInt(
      window.getComputedStyle(Player).getPropertyValue("top")
    );
    let obstcaleLeftValue = parseInt(
      window.getComputedStyle(Obstacle).getPropertyValue("left")
    );
    if (
      obstcaleLeftValue < 25 &&
      obstcaleLeftValue > -75 &&
      playerTopValue >= 133
    ) {
      gameisover = true;
      const finalScore = Math.floor((counter - 1) / 100);
      finalCounter.innerHTML = `You scored ${finalScore} points!`;
      GameOver.style.display = "block";
      GameWindow.style.display = "none";
      scoreSpan.style.display = "none";
    } else {
      counter++;
      scoreSpan.innerHTML = "Score: " + Math.floor(counter / 100);
    }
  }
}, 10);
