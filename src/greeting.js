module.exports = {
  getScore,
  wonPoint,
};

const score = ["love", "15", "30", "40"];
let advOne = false;
let advTwo = true;
let winner 
let scorePlayerOne = 3;
let scorePlayerTwo = 3;

function getScore() {
    if(winner == "playerOne"){
        return "Game player 1"
    } else if (winner == "playerTwo"){
        return "Game player 2"
    } else if (advOne == true) {
        return "Adv-1";
    } else if (advTwo == true) {
        return "Adv-2";
    } else if (scorePlayerOne == scorePlayerTwo && scorePlayerOne === 3) {
        return "Deuce";
    } else if (scorePlayerOne == scorePlayerTwo) {
        return `${score[scorePlayerOne]}-all`;
    } else {
        return `${score[scorePlayerOne]}-${score[scorePlayerTwo]}`;
    }
}

function wonPoint(player) {
  if (getScore() == "Deuce") {
    if (player == "playerOne") {
      advOne = true;
    } else {
      advTwo = true;
    }
  }else if (getScore() == "Adv-1"){
    if (player == "playerOne"){
        winner = "playerOne"
    } else {
        advOne = false
    }
  } else if(getScore() == "Adv-2"){
    if (player == "playerTwo"){
        winner = "playerTwo"
    } else {
        advTwo = false
    }
  } else if (player == "playerOne") {
    scorePlayerOne++;
  } else {
    scorePlayerTwo++;
  }
}
