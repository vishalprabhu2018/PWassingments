function addBlog(){
const form =document.querySelector('.form')

form.addEventListener('submit', (e) => {
let data=document.querySelector('#data').value;

 const object = {};
 const formData = new FormData(form); 
 formData.append("data", data);
 formData.forEach(function(value, key){
     object[key] = value;
 });
    localStorage.setItem('formObj',JSON.stringify(object));
    
  });

}


addBlog();


const value=localStorage.getItem('formObj')
const object=JSON.parse(value)
console.log(object);


