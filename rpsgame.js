//Taking variables for calculating score
let userScore = 0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//Generating Choices From Computer 
const genCompChoice = () => {
    //rock,paper,scissiors
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); //Generating Random Index Number from 0-2
    return options[randIdx];

};

//Function For the game if the condition is same same in bothe the cases which means if the condition is draw
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "orange";
}

const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

//Function for displaying the results of the code.(The results of the game play)
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        computerScore++;
        compscore.innerText=computerScore
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

//Main Logic For the Game 
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) //Condition for draw
    {//GAME DRAW
        drawGame();
    } else
    {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper"? false : true ;
        } 
        else if(userChoice==="paper")
        {
            userWin = compChoice === "scissors"? false:true ;
        }
        else 
        {
            userWin = compChoice === "rock"?false : true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//Function to access the choices and made the images functionable on click
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });

});