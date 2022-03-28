
const Stake = 100;
const bet = 1;
const  Is_Win = 1;
const Is_Loose = 0;
const NO_OF_DAYS_IN_MONTH = 30;
let totalStackValue = 100; 
let dailyBet = 0;
let noOfDays=0 ;
		console.log("gambler starting with a stake of : $" + Stake + " and bet in every game is : $" + bet);

		while(noOfDays<NO_OF_DAYS_IN_MONTH) {
			
			while (dailyBet <= Stake / 2) {
	
				var empCheck = Math.floor(Math.random()*10)%2;
				switch (empCheck) {
					case Is_Win:
						totalStackValue += bet;
						break;
					default:
						totalStackValue -= bet;
				}
	
				dailyBet += bet;
			}
			noOfDays++;
			dailyBet=0;
            
		if (totalStackValue > Stake)
			console.log("win amount in a day " + noOfDays + " is  " + (totalStackValue - Stake));
            
        else if (totalStackValue < Stake)
        
			console.log("loose amount in a day " + noOfDays + " is : " + (Stake - totalStackValue));
		
		else
			console.log("no loss and no win");
		}