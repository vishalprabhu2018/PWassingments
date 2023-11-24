/*
Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.
*/

const text=document.querySelector('.text');
const submit=document.getElementById('submit');


submit.addEventListener('click',()=>{
    if (text.innerText === "The most affordable learning platform") {
        text.innerText = "PW Skills";
    } else {
        text.innerText = "The most affordable learning platform";
    }

})