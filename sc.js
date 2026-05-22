let userScore = 0;
let compScore = 0;
const winmsg = document.querySelector(".startgame");
const u1 = document.querySelector("#userscore");
const c1 = document.querySelector("#compscore");
const res = document.querySelector(".restart");

const choices = document.querySelectorAll(".option");

const complay = () => {
 const choose = ["rock", "paper", "scissors"];
 const move = Math.floor(Math.random() * 3);
 return choose[move];
};

const drawGame = () => {
    console.log("Game was draw!");
}


const restart = () => {
    res.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;

        u1.innerText = userScore;
        c1.innerText = compScore;

        winmsg.innerText = `Game Restarted!`
    }

    )
}

let userwin = true;

const showWinning = (userwin, choiceId, compmove) => {
         if(userwin === true) {
            console.log("You are the winnner!");
            winmsg.innerText = `You win, Your ${choiceId} beats ${compmove}`; 
            userScore++;
            u1.innerText = userScore;

         } else {
            console.log("You are the loser!");
            winmsg.innerText = `You lose, ${compmove} beats your ${choiceId}`;
              compScore++;
            c1.innerText = compScore;
         }
}

const userplay = (choiceId) => {
     console.log("User choice = ", choiceId);
     const compmove = complay();
     console.log("Computer choice = ", compmove);

     if(choiceId == compmove) {
          drawGame();
          winmsg.innerText = "It's a Draw!"
     } else {
         userwin = true;
        if(choiceId === 'rock') {
              if(compmove === 'paper') {
                   userwin = false;
              } else {
                  userwin = true;
              }
        } else if(choiceId === 'scissors') {
            if(compmove === 'paper') {
                   userwin = true;
            } else {
                 userwin = false;
            }

        } else if(choiceId === 'paper') {
                  if(compmove === 'scissors') {
                      userwin = false;
                  } else {
                    userwin = true;
                  }
        }

        showWinning(userwin, choiceId, compmove);
       
     }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
          console.log("choice was clicked!", choiceId);
          userplay(choiceId);
    });
});

 restart();