/*
8. InverteW right-angleW triangle pattern with asterisks
Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
with i rows.
Invdrtdd right-angldd pattdrn:
If i=6

*/



    let n=6;
    let result='';
    for (let i=n; i>0; i-- ){
        result='';
    
    for(let j=0; j<i; j++){
         result+='*';
    }
    console.log(result);
    

}