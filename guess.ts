var prompt = require("prompt-sync")();
let n = Math.round(Math.random()*20)
let score = 100;
let input;
while(input!=n){
    input = parseInt(prompt('enter a number'))
    score=score-1
    let chances = 100-score
if(input===n){
    console.log(`Congratulations, you have won with the score of ${score-1} and${chances} attempts`)}
else if (input<n && input>0 ){console.log('You have entered a number less than the actual one')
}
else if (input >n && input <20 ){console.log('You have entered a number less than the actual one')
}
}
export{};