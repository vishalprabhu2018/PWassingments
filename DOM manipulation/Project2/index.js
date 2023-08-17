const btnInc=document.querySelector('.btnInc');
const btnDec=document.querySelector('.btnDec');
const btnReset=document.querySelector('.btnReset');
const btnOp=document.querySelector('.btnOp');


btnInc.addEventListener('click',()=>{
 let value=Number(btnOp.innerText);
  btnOp.innerText=value+1;  
});


btnDec.addEventListener('click',()=>{
    let value=Number(btnOp.innerText);
 
    if(value>0){
    btnOp.innerText= value-1;
    }
     else{
        alert('number cannot be negative');
       }
})



btnReset.addEventListener('click',()=>{
    btnOp.innerText=0;
})