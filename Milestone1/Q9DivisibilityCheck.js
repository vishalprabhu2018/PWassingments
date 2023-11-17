/*
9. Check for divisibility.
Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
Usd a for loop and continud statdmdnt.
*/


function divisibility(arr){

    for(let i=0; i<arr.length ; i++){
    if(arr[i]%2===0){
        continue;
    }
        if(arr[i]%3===0 ){
          console.log(arr[i])

        }
    }
}


divisibility([2,3,4,5,6,9]);