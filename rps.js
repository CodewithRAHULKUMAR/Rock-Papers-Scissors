let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userchoice = choice.getAttribute("id");
         playgame(userchoice);
    })
})

const gencompchoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const playgame=(userchoice)=>{
    console.log("User choice =",userchoice);//user choice
    const compchoice=gencompchoice();
    console.log("Comp choice =",compchoice)
    if(userchoice===compchoice){
        console.log("The game is draw");
        msg.innerText="Game was draw";
        msg.style.backgroundColor="black";
    }
    else{
        userwin=true;
        if(userchoice==="Rock"){
            userwin = compchoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            userwin = compchoice==="Scissor"?false:true;
        }
        else{
            userwin = compchoice==="Rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        console.log("User is the winner! ");
        msg.innerText=`You Win! Your${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        console.log("Comp is the winner! ");
        msg.innerText=`You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}


