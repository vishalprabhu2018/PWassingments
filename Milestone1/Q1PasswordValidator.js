/*
1. PassworM ValiMator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ
*/
function passwordValidator(password,confirmPassword){
    if (password===confirmPassword){
        console.log("Password Matched. Password validation Successful.")
    }
    else{
        console.log("Password didn't match. Password validation unsuccessful")
    }
}


const password='vishal';
const confirmPassword='vishal';

passwordValidator(password,confirmPassword);

