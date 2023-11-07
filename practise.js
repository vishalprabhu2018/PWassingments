// let arr1=[1,2,3,4,5,6];
// arr1=[arr1.shift(),...arr1]
// console.log(arr1);


// let var1=[1,2,3];
// let var2=[4,5,6];
// let result=var1.concat(var2);
// console.log(result);



// let sum=0;

// let arr = [10,15,20,30];  
// let arr10 = [10,15,20,30];  

// let output=arr.forEach((element) =>

// {  

//   return sum=sum+element;

// })

// console.log(sum);


// var values=["one","two","Three"];  

// var ans=values.shift();  


let arr=[1,2,3,4,5,5,6]
// let val=['vishal']
// console.log(val.indexOf('vishal')); 


function SecondLargest(arr) {
    let array1= arr.sort((a, b) => b - a);
     console.log(array1);
     for (let i =1; i < array1.length; i++) {
         if (array1[i] != array1[i - 1]) {
             return console.log( array1[i]);
         }
     }
     return -1;
 }



 function secondGreatest(arr){
      let max=Math.max(...arr);
        
      for(i=0; i<arr.length; i++){
         if(arr[i]===max){
          let array=arr.splice(i-1,1);
          let max2=Math.max(...array);
              if(max != max2){
                return console.log(max2);
              }

         }
      }
      return -1;
 }

 secondGreatest(arr);