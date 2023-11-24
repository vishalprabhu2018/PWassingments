/*
17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/

const cust={
 name:'vishal',
 amount:2000
 
}

function withdraw(name,amount){
         if (name.toLowerCase()===cust.name.toLowerCase()){
             if(amount<cust.amount  && amount>0){
              cust.amount-=amount;
              return console.log(cust.amount);
             }
             else{
              return console.log("witdram amount is not applicable i.e amount should be zero or less than that. In other scenario the customer amount in the account should be less than the the withdraw amount ")
             }
         }
         else{
             console.log('name does not matched')
         }
}

function deposit(name,amount){
    if (name.toLowerCase()===cust.name.toLowerCase()){
        if(amount>0){
            cust.amount+=amount;
            return console.log(cust.amount)
        }
        else{
            return console.log('amount is less than zero or equal to zero');
        }
    }
    else{
        console.log('name does not matched')
    }
}

withdraw('vishal',0);
deposit('vishal',0);