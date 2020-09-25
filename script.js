const Player = document.getElementById("Player");
const Obstacle = document.getElementById("Obstacle");
const GameWindow = document.getElementsByClassName("Game")[0];
const GameOver = document.getElementsByClassName("GameOver")[0];
const scoreSpan = document.getElementById("scoreSpan");
const finalCounter = document.getElementsByTagName("p")[1];
let counter = 0;

function Jump() {
  if (Player.classList == "jumping") {
    return;
  }
  Player.classList.add("jumping");
  setTimeout(() => {
    Player.classList.remove("jumping");
  }, 500);
}

const checkDead = setInterval(function () {
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
    const finalScore = Math.floor((counter - 1) / 100);
    finalCounter.innerHTML = `Your scored ${finalScore} points!`;
    GameOver.style.display = "block";
    GameWindow.style.display = "none";
    scoreSpan.style.display = "none";
  } else {
    counter++;
    scoreSpan.innerHTML = "Score: " + Math.floor(counter / 100);
  }
}, 10);
