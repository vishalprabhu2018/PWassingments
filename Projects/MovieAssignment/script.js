let movie=document.querySelector('#search');

function name(){
   console.log(movie.value);
}

window.addEventListener('keypress',((e)=>{
       let data=''
   
    if(e.key==='Enter'){
        
    }
    console.log(e);

}))


let name2='ave'
async function movieInfo(movieName){

    const apiURL=`http://www.omdbapi.com/?&t=${movieName}&apikey=e308b89`
    const apiKey='e308b89';
const option={
   method:'GET'
  
}

const  response= await fetch(apiURL);
const data=await response.json();
// console.log(data);

return{
    Title: data.title,

}

}

let movieObj=movieInfo(name2);
console.log(movieObj)

function cards(){
   
}


movieInfo(name2);

