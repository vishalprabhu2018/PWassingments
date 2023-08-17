//Values and data types Q1


let s= "I am happy to join PW skills  FSWD course"

let n= 9;
let f=10.2;

let i=Number.POSITIVE_INFINITY;
let i_n= Number.NEGATIVE_INFINITY;

let big_int= 1024n;

let boolean= true;

let u= undefined;

let nu= null;

let sym=Symbol("PW skills");  // Priting in console.log creates error ie cannot convert a symbol value to a string

console.log("\n String = "+s);
console.log("Integer = "+n);
console.log("float = "+f+"\n");
console.log("Positive ifinity = "+i);
console.log("Negative Infinity = "+i_n);
console.log("Big int = "+ big_int+"\n");

console.log("Boolean = "+ boolean);
console.log("Undefined = "+u);


console.log("Symbol = " + sym);



// Q2 Values and data type Q2

const products=['Iphone','MacBook Pro','Flower Pot', 'Water Bottle','Mac Studio mini','Watch', 'Tennis Ball', 'Mouse Pad','keyboard', 'Lens' ];


// Values and data types Q3
const students={1:"Mithun",2:'Alka', 3: 'Anurag', 4:'Prabir',5:'Shivam'};



//Variables and typeof Q1
let var1='I am happy to join PW skills fswd course';
console.log(typeof var1);

let var2=9;
let var3=10.2;
let var4=Number.POSITIVE_INFINITY;
let var5= NaN;
let var6=1024n;
let var7=true;
let var8=undefined;
let var9=null;
let var10=Symbol('PW Skills');
let var11=[1,2,'PW']
let var12={name:'PW Skills',course:'FSWD'}
console.log(`var2 : ${typeof var2 }, var3 : ${typeof var3 }, var4 : ${typeof var4 }, var5 : ${typeof var5 }, var6 : ${typeof var6 }, var7 : ${typeof var7 }, var8 : ${typeof var8 }, var9 : ${typeof var9 }, var10 : ${typeof var10 }, var11: ${typeof var11 }, var12 : ${typeof var12 }`)



//Valid and typeof Q2
let name='PW Skills';
console.log(name);    // Output: PW skills
let iAmHappy=true;
console.log(iAmHappy); // Output: true

// invalid variables
let 1name='PW Skills';
console.log(1name);//Output:Uncaught SyntaxError: Invalid or unexpected token

let var=13
console.log(var);// Uncaught SyntaxError: Unexpected token 'var'




//Operators Q1


let number=6;

console.log(`${number}*1=${number*1}`);
console.log(`${number}*2=${number*2}`);
console.log(`${number}*3=${number*3}`);
console.log(`${number}*4=${number*4}`);
console.log(`${number}*5=${number*5}`);
console.log(`${number}*6=${number*6}`);
console.log(`${number}*7=${number*7}`);
console.log(`${number}*8=${number*8}`);
console.log(`${number}*9=${number*9}`);
console.log(`${number}*10=${number*10}`);


// Operators Q2

let num1=10;
let num2=8;

console.log(`The addition of num1 and num2 is ${num1+num2}`);

console.log(`The substraction of num1 and num2 is ${num1-num2}`);

console.log(`The multiplication of num1 and num2 is ${num1*num2}`);

console.log(`The division of num1 and num2 is ${num1/num2}`);

console.log(`The substraction of num1 and num2 is ${num1%num2}`);

console.log(`The substraction of num1 and num2 is ${num1**num2}`);



//Q3  Operators

let lenght=10;
let width=20;

let perimeterOfRectangle=2*(length+width);

console.log(`The perimeter of the rectangle with length: ${length} and ${width} is ${perimeterOfRecatangle}`);


//Q3   Operators
let numf1=12;
let numf2=12;

console.log(numf1==numf2);

let num3=12;
let num4=10;
console.log(num3==num4);

let num11=12;
let num12=12;
console.log(num11!=num12);

let num13=12;
let num14=10;

console.log(num13!=num14);

let num23=12;
let num24="12";

console.log(num23===num24);

let num33=12;
let num34="12";

console.log(num33!==num34);


let num41=13;
let num42=12;

console.log(num41>num42);

let num43=10;
let num44=12;

console.log(num43>num44);

let num51=13;
let num52=12;

console.log(num51>=num52);


let num53=10;
let num54=12;
console.log(num53>=num54);


let num61=12;
let num62=13;
console.log(num61<num62);

let num63=12;
let num64=10;
console.log(num63<num64);

let num71=13;
let num72=13;
console.log(num71<=num72);

let num73=12;
let num74=10;

console.log(num73<=num74);





//What are conditions, if , if-else, if-else-if    Q1
let trafficLight='orange';

if(trafficLight=='red'){
    console.log("Veichle must stop. ");
} else if(trafficLight="orange"){
    console.log("Vehicles must wait. The signal is changing to red or green");
} else if(trafficLight=="green"){
    console.log("Veichles may proceed with caution");
} else{
    consosle.log("Invalid traffic Light");
}



//What are conditions, if , if-else, if-else-if     Q2

let num10=20;
let num20=15;
if(num10>num20){
    console.log("num10 is greater than num20");
}else{
    console.log("num20 is greater thana num10")
}




//What are conditions, if , if-else, if-else-if    Q3
 
let num=5;
if (num%5==0 && num%3==0){
    console.log("FizzBuzz");
}else if(num%3==0){
    console.log("Fizz")
}else if(num%5==0){
    console.log("Buzz");
}else{
    console.log("Invalid input");
}





//Switch case Q1


const day="Tuesday";
let daysUntilWeekend;

switch (day){
    case"Monday":
        console.log("1");
    break;
    case "Tuesday":
        console.log("2");
    break;
    case "Wednesday":
        console.log('3');
    break;
    case 'Thursday':
        console.log('4');
    break;
    case 'Friday':
        console.log('5');
    break;
    case 'Saturday':
        console.log('6');
    break;
    case 'Sunday':
        console.log('7');
    break;
    default:
        daysUntilWeekend="Invalid day";
    break;
}





//Switch Case Q2

const monthNumber=1;
switch(monthNumber){
    case 1:
        console.log("January");
    break;
    case 2:
        console.log("February");
    break;
    case 3:
        console.log('March');
    break;
    case 4:
        console.log('April');
    break;
    case 5:
        console.log('May');
    break;
    case 6:
        console.log('June');
    break;
    case 7:
        console.log('July');
    break;
    case 8:
        console.log("August");
    break;
    case 9:
        console.log("September");
    break;
    case 10:
        console.log('October');
    break;
    case 11:
        console.log('November');
    break;
    case 12:
        console.log('December');
    break;
   default:
        console.log("Invalid month number");
}



//Ternary conditions Q1

let number1=0;

number1==0?console.log("The number is zero"):num>0?console.log("The number is greater than zero"): console.log("The number is lesser than zero");


//Ternary conditions Q2

let num30=10;
let num40=10;

num30==num40
?console.log("Both the numbers are equal."): num30>num40?console.log(`The larger number among the two numbers sis ${num30}`): console.log(`The larger number among the two number is ${num40}`)




//Loops Q1

let number5=5;
for (let i=1; i<=10; i++){
    console.log(`${number5}*${i}=${number*i}`);
}



//Loops Q2
let number10=10;

for (let i=1; i<=number; i++){
    if(i%2==0){
        console.log(i);
    }
}

