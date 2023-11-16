/*
6. Vowel Counter
We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
countedQ
*/



const input = document.getElementById("input");

// Add an event listener for the keypress event
input.addEventListener("keypress", function(event) {
    
  // Check if the key pressed is Enter (code 13)
//   if (event.keyCode == 13) {
//     // Prevent the default action of the event
//   }
//     event.preventDefault();
    // Call the function you want to execute
    myFunction();
  
});

// Define the function you want to execute
function myFunction() {
  // Do something here
 
let count=0;

let arr=input.value.split('');

arr.forEach((e)=>{
    if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
        count+=1;
    }
})

console.log(count);

const display=document.querySelector('.count');

display.innerText=`count=${count}`;

    

}