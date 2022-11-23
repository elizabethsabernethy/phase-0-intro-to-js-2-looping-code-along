// Code your solutions in this file
const messages = [];

function writeCards(name){
    for(let i=0; i<name.length; i++){
     messages[i] = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    } 
    return messages;
}

function countDown(number){
    for(let i=number; i<(number+1) && i>-1; i--){
        console.log(number);
        number--;
    }
}