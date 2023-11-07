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