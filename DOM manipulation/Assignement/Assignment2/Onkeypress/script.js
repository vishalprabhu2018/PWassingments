const input=document.querySelector('.input');
const op=document.querySelector('.op');

input.addEventListener('keypress',(e)=>{
op.innerText=`you had pressed ${ e.key}`
})