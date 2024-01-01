const value=localStorage.getItem('formObj')
const object=JSON.parse(value);


const title=document.querySelector('#title').innerText=object.title;
const description=document.querySelector('#description').innerText=object.description;
