function game(){
    let usrInput = prompt("Pick rock, paper, or scissors:");
    const rps = ["rock", "paper", "scissors"]; 
    let computerPick = rps[Math.floor(Math.random() * 3)]

    if (usrInput == computerPick){
        alert("you picked "+usrInput+"!\nThe computer also picked "+computerPick+"!\nIt was a tie...")

    } else if (usrInput == "rock" && computerPick == "scissors" || usrInput == "paper" && computerPick == "rock" || usrInput == "scissors" && computerPick == "paper"){
        alert("you picked "+usrInput+"! \nThe computer picked "+computerPick+"! \nYOU WIN!")

    }else{
        alert("You picked "+usrInput+"!\nThe computer picked "+computerPick+"\nYou loose.")
    }

}

while(true){
    game()
    if (prompt("would you like to play again (y/n):") =='n'){
        break;
    }
}
