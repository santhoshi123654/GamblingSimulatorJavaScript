const { bet } = require('./Gambleruc2.js');
const { Is_Win, Stake } = require('./GamblerUc2.js');

var r1 = require('./Gambleruc1.js').Stake;
var r2 = require('./Gambleruc1').bet;
var r3 = require('./Gambleruc1.js').Is_Win;
var r4 = require('./Gambleruc1').Is_Loose;

var empCheck = Math.floor(Math.random()*10)%2;
console.log("gambler starting with a stake of : $" +Stake + " and bet in every game is : $" + bet);
let Win_amount_in_a_day = 0;
let Loosing_in_a_day = 0;
switch(empCheck){
case Is_Win: 
    Win_amount_in_a_day = Win_amount_in_a_day + bet;
    console.log("The Winning amount in a day is : " + Win_amount_in_a_day);
    break;
default:
    Loosing_in_a_day = Loosing_in_a_day - bet;
    console.log("The Loosing amount is :" + Loosing_in_a_day);
}