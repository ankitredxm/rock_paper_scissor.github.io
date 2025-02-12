let choices=document.querySelectorAll(".box");
// let score=document.querySelector("#msg1");
let  news=document.querySelector("#msg6");
let human=document.querySelector("#human");
let computer=document.querySelector("#computer")

let countmyScore=0;
let computerScore=0;




const genCompChoice=()=>{
    const options=["rock","paper","Scissors"];
    let ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){ console.log("You Win");
       ++countmyScore;
       human.innerText=countmyScore;
        news.classList.add("msg-new1");
news.innerText=`You Won ! Your ${userChoice} beats ${compChoice}`;


    }
    else {console.log("You Lose");
        ++computerScore;
        computer.innerText=computerScore;
       news.classList.remove("msg-new1")
        news.classList.add("msg-new");
    news.innerText=`You Lose ! Computer-choice ${compChoice} beats ${userChoice}`;
    
    }}

const playGame=(userChoice)=>{
    let userWin=true;
     const compChoice=genCompChoice();
     if(userChoice==compChoice) news.innerText=`Game Drawn`;
     else{
        
        if(userChoice=="rock"){
            userWin = compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin= compChoice=="Scissors"?false:true;
        }
        else{
            userWin= compChoice=="rock"?false:true;
        }
     }
     showWinner(userWin,userChoice,compChoice);
};





choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
