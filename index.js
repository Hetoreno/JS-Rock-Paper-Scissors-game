let scoreBlue = 0;
let scoreRed = 0;
const blue = document.querySelector(".blue-score");
const red = document.querySelector(".red-score");
const answer = document.querySelector(".comp-answer");
const shoot = document.querySelector(".shoot");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//SCORE
function scoreWin (){
    scoreBlue++;
    blue.innerHTML = scoreBlue;
};
function scoreLose (){
    scoreRed++;
    red.innerHTML = scoreRed;
};

//COMPUTER'S ANSWER
function botChoice (){
    const random = ["rock","paper","scissors"];
    const botValue = random[Math.floor(Math.random() * random.length )]; 
    return botValue;
};   

//USER ANSWER
function userClick (ownChoice){
    const computerAnswer = botChoice();
    switch (ownChoice + computerAnswer){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You Win");
            answer.innerHTML = "You won! BOT got " + computerAnswer;
            scoreWin();
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("You Lose");
            answer.innerHTML = "You lose! BOT got " + computerAnswer;
            scoreLose();
            break;
            
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a tie");
            answer.innerHTML = "It's a tie.. you both got " + computerAnswer;
            break;
    }
};

    rock.addEventListener("click",function(){
        userClick("rock");
    });

    paper.addEventListener("click",function(){
        userClick("paper");
    });

    scissors.addEventListener("click",function(){
        userClick("scissors");
    });