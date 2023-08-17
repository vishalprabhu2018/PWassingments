const btnE1=document.querySelector('.btn');


let randomColor= ()=>{
    let val='123456789ABCDEFGH';
   let  cons='#';


   for(i=0; i<6; i++){
    cons=cons+val[Math.floor(Math.random()*16)]
   }
   return cons;
}

function changeRandomColor(){
    document.body.style.backgroundColor= randomColor();
}


btnE1.addEventListener('click',changeRandomColor);