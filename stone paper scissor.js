// stone
// paper 
//scissor

//Game Developed By Nitin Choudhary
const prompt = require('prompt-sync')()
let arr = ["Stone", "Paper", "Scissor"]
let bot = Math.floor(Math.random() * arr.length)

let me = 0, com = 0, draw = 0;
let count = 1, invalidround= 0;
function start() {
    let arr = ["Stone", "Paper", "Seasor"]
    let bot = Math.floor(Math.random() * arr.length)
    console.log("Welcome! Please Select from the following")
    console.log("1: Stone")
    console.log("2: Paper")
    console.log("3: Scissor")
    let a = prompt()
    Number.parseInt(a)
    if ((a - 1 == bot)) {
        draw++
        console.log("It's A Draw!")
    }
    else if ((a - 1 == 0 && bot ==2 ) || a - 1 == 1 && bot== 0 ||  (a - 1 == 2 && bot == 1) ) {
        console.log("Congratulations You Won!")
        me++
        console.log("Computer selected ", arr[bot])
    }
    else if ((a - 1 == 0 && bot == 1)||(a - 1 == 1 && bot == 2) || (a - 1 == 2 && bot == 0)) {
        console.log("Computer wins! Better Luck Next Time")
        console.log("Computer selected ", arr[bot])
        com++
    }
    else{
        console.log("Provide Valid Input!")
        invalidround++
        
    }
    let b = prompt("Press 1 If You Want to play Again else Press Any Other key")
    if (b == 1) {
        count++
        start(); // Restart the game
    }
}
start();
console.log("Your Total Score Is " + me + " and Computer's Total score is " + com + " and It was draw in " + draw + " rounds out of " + (count-invalidround) + " rounds!")
console.log(`Final Score:${(me >= com) ? (me > com) ? " You" : "No one" : " Computer"} Won The Game!`)
