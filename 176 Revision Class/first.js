let userAuth=undefined;

if (userAuth){
    console.log('User Allowed to login')
}
console.log('outside the scope')


let isLoggedIn=true;

isLoggedIn?console.log('logged in'):console.log('not logged in');


let arr=['vishal','2']

for(let i=0; i<arr.length; i++)
{
    let el=arr[i];
    console.log(el);
    //  console.log(arr[i]);
}