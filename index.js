// Code your solutions in this file

card = ["Ada", "Brendan", "Ali"];
function writeCards(card, birthday) {
    for (let i = 0; i < card.length; i++) {
        console.log(`Thank you, ${card[i]} go the wonderful ${birthday} gift!`);
    }
        return card;
}


function countDown(num){
    let countDown=10;
    while(countDown<10){
        console.log(num);
        countDown--;
    }
    console.log(num);
}