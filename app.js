/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//Player -> 0
//Player 2 ->
var scores, roundScore, activePlayer, dice;
init();

//Add a button roll event listener
document.querySelector(".btn-roll").addEventListener('click', function(){
    if (gamePlaying){
        //Dice : Random Number 1-6;
        dice = Math.ceil(Math.random()*6); //1-5.999
    
        //change dice image
        document.querySelector(".dice").style.display = 'block';
        document.querySelector(".dice").src = "dice-" + dice + ".png";
        if(dice === 1){
            nextPlayer();
        
        } else {
        
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
    }
// document.querySelector("#current-0").textContent = dice;

    //function btn_roll (){}
    //console.log("Button roll event listener");
}
);

document.querySelector(".btn-hold").addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.querySelector("#score-" + activePlayer ).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20){
            console.log(activePlayer + "wins");
            document.querySelector("#name-"+ activePlayer).textContent = "Winner!";
            
            document.querySelector(".player-"+ activePlayer+ "-panel").classList.add("winner");
            document.querySelector(".player-"+ activePlayer+ "-panel").classList.remove("active");
            document.querySelector(".btn-hold").classList.remove("active");
            gamePlaying=false;
    
        } else {
            nextPlayer();
        }
    }
}
);

function nextPlayer(){
    roundScore = 0;
    document.querySelector("#current-" + activePlayer ).textContent = 0;
    document.querySelector(".player-"+ activePlayer+ "-panel").classList.remove("active");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-"+ activePlayer+ "-panel").classList.add("active");
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //Initialize game
    document.querySelector("#score-0").textContent = '0';
    document.querySelector("#score-1").textContent = '0';
    document.querySelector(".dice").style.display = 'none';
    document.querySelector("#current-0").textContent = '0';
    document.querySelector("#current-1").textContent = '0';

    //change back "Winner!" to player 1 or player 2
    document.querySelector("#name-0").textContent = 'Player 1';
    document.querySelector("#name-1").textContent = 'Player 2';
    // remove active and winner classes and amke sure active is only player 1
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-new").addEventListener('click', init);
