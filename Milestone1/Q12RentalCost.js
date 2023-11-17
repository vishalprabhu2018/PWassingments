/*
12. Calculate rental cost
A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
Thd rdntal costs arc
V Economy = Rs. 4FFF /- pdr dayE
V Midsizd = Rs. 1F,FFF /- pdr dayE
V Luxury = Rs. 2F,FFF /- pdr day.
*/

function rentalCost(car,days){
    let cost;
    
    if(car.toLowerCase()==='economy'){
        cost=4000*days;
        return cost;
    }
    if(car.toLowerCase()==='midsize'){
        cost=10000*days;
        return cost;
    }
    if(car.toLowerCase()==='Luxury'){
        cost=20000*days;
        return cost;
    }
}

console.log(rentalCost('midsize',10))