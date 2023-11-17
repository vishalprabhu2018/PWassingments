/*
10. Correct a bug
You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly experiencing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug.
*/

// customer add items createImageBitmap
// cart stores the quant of each items
// quantity of cart 1/2


function doubleArray(arr){
   let result= arr.map((element)=>{
     return element*2;
    })
    return result;
}

console.log(doubleArray([2,4,5,6]))




// let arr= [{'cloth': 2}, {'item': 2}];

// for (let i = 0; i < arr.length; i++) {
//     for (let key in arr[i]) {
//         // Check if the key is 'cloth' or 'item'
//         if (key === 'cloth' || key === 'item') {
//             // Double the value
//             arr[i][key] *= 2;
//         }
//     }
// }

// console.log(arr);


// let arr = [{'cloth': 2}, {'item': 2}];

// let newArr = arr.map(obj => {
//     for (let key in obj) {
//         // Check if the key is 'cloth' or 'item'
//         if (key === 'cloth' || key === 'item') {
//             // Double the value
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// });

// console.log(newArr);
