let userscore = 0;
let compscore = 0 ;


const choices = document.querySelectorAll(".choice");

const drew = ()=>{
    console.log("it waa a draw");
}

const showeinner = (userwin) =>{
    if(userwin){
        console.log ("you win")
    }else(
        console.log("you loose")
    )
    
}

const getcompchoice = () =>{
    const options = ["rock"  , "paper" , "scissors"]
    const raandom = Math.floor(Math.random() *3)
    return options[raandom];

}

const playgame = (userchoice) =>{
    console.log("user was clicked " , userchoice)
    let compchoice = getcompchoice();
    console.log("comp was clicked " , compchoice)

    if (userchoice === compchoice){
        //draw
        drew();
        }else{
            let userwin = true;
            if(userchoice = "rock"){
                //scissor , paper
                userwin = compchoice === "paper" ? false:true
            }else if(userchoice ="paper"){
                //scissor , rock
                userwin = compchoice === "scissors" ? false:true
            }else{
                //rock , paper
                userwin = compchoice === "rock"? false:true
            }
            showeinner(userwin);


            


        }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    });
});