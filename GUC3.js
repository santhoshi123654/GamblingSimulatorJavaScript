const { bet, Stake, Is_Win } = require('./Gambleruc2.js');

var r1 = require('./Gambleruc1.js')
// var r2 = require('./Gambleruc1').bet;
// var r3 = require('./Gambleruc1.js').Is_Win;
// var r4 = require('./Gambleruc1').Is_Loose;

var empCheck = Math.floor(Math.random()*10)%2;
console.log("gambler starting with a stake of : $" +r1.Stake + " and bet in every game is : $" + r1.bet);
 let  totalStackValue = 100;
 let dailyBet =0;
 while (dailyBet <= Stake / 2) {
    switch (empCheck) {
        case Is_Win:
            totalStackValue += bet;
            break;
        default:
            totalStackValue -= bet;
    }

    dailyBet += bet;
}
if (totalStackValue > Stake)
    console.log("win amount in a day is = " + (totalStackValue - Stake));

else
    console.log("loose amount in a day = " + (Stake - totalStackValue));