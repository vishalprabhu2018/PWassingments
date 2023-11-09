
/*
4. Highest Marks
A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ

*/

const marks=[12,14,15,16];

// let op2=Math.max(...marks);
// console.log(op2);
let result=0;
let op=marks.forEach((e)=>{
 result=e>result?e:result;

//  if (e>result){
//     result=e;
//  }
//  else{
//     result=result;
//  }
 

})
console.log(result);
