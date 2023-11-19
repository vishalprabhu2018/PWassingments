/*
13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/ 



function calculateTotalBill(eachDish,numOfPeople){
    const totalBill=eachDish*numOfPeople;
    const billPerPerson=totalBill/numOfPeople;

    const billDetail={
        totalBill:totalBill,
        billPerPerson:billPerPerson
    }
    return billDetail;
}

console.log(calculateTotalBill(10,4))