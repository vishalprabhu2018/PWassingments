let division=document.querySelector('.division');
let op=document.querySelector('.op');


window.addEventListener("keydown",(e)=>{
    op.style.color="green";
    op.innerText=`keydown ${e.key}`
})  


document.addEventListener("keyup",(e)=>{
    op.style.color='blue';
    op.innerText=`keyup ${e.key}`
    console.log(e);
} ) 