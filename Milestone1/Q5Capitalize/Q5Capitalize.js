/*
5. Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changesQ.

*/

const input = document.querySelector('input');
const log = document.getElementById("values");

input.addEventListener('input',capitalLetter);



function capitalLetter(e){
let username=e.target.value;
//spliting name in a array
let arr=username.split('');

//removing first element as a letter
let letter=arr.shift()

// console.log(arr[0]);

let result= letter==(letter.toLowerCase())? letter.toUpperCase():letter;
// console.log(result);
arr.unshift(result);
username=arr.join('');
log.textContent=`${username}`
return username;
}

// console.log(capitalLetter(value));

