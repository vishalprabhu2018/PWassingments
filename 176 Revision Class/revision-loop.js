
// if (condition){
//     // truestatement
// } else
// {
//     false
// }


// if (1===1) {
//     console.log("Statement executed");
// }

let userToken = undefined
let googleAuthToken = ""

// if (userToken || googleAuthToken) {
//     console.log("User allowed to login");
// } else {
//     console.log("Please login to get your token");
// }
// console.log("Outside the scope");


// let isPWStudent = false
// let isPWEmployee = false

// if (isPWStudent) {
//     console.log("Verified you are PW Student");
// } else if (isPWEmployee) {
//     console.log("Congrats, you are PW Emplyee");
// } 
// else {
//     console.log("Sorry, details not found");
// }

let isLoggedIn = false

// condition ? true : false

// isLoggedIn ? console.log("Logout") : console.log("Login")


// switch (expression) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month = 4

switch (month) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
          break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Holiday");
        break;
}

//Loops

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(Init, condition, changer){
//     //statements
// }
// let i = 1
// for( i ; i <= 5; i++){
//     console.log(`Value of i is: ${i}`);
// }

let arr = ["PW", "PW skills", "Internship", "PW labs", "gate wallah"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(arr[index]);
    
}

let obj = {
    name: "pwstudents",
    course: "fsjs",
    duration: 100
}

for (const i in obj) {
    //console.log(`${i} - ${obj[i]}`);

}

for (const ite of arr) {
    console.log(ite);
}

let newi = 0

while (newi <= 5) {
    console.log(`Value of i is: ${newi}`);
    newi = newi + 1
}

// do {
    
// } while (condition);