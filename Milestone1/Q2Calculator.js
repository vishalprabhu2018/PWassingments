/*
2. Calculator
Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
to perform the operation on the two num#ers. 
The calculator function should"
Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
 Use a switch statement to determine which operation to perform #ased on the value of the operatorP
 If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a varia#le called resultP
 If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ
*/


function calculation(num1,num2, operator){
    let result;

    switch(operator){
        case"+":
        result=num1+num2;
        break;
        case"-":
        result=num1=num2;
        break;
        case"*":
        result=num1*num2;
        break;
        case "/":
         if (num2!==0){
            result=num1/num2;
          
         }
         else{
            console.log('denominator cannot be zero');
            return;
         }
         break;
         default:
            console.log('invalid operator');
            return;
    }
     console.log(`Result=${result}`);

}

calculation(4, 2, "/");