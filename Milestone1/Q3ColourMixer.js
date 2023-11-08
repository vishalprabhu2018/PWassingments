/*
3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q
*/

// 2s color
// switch to determine the result when the two color are mixed 

function colorMixer(color1,color2){
  switch(color1){
    case 'red':       // red imp outer case
        switch(color2){
            case 'blue':
                console.log('purple')
                break;
            case 'yellow':
                console.log('orange')
                break;
            default:
                console.log('invalid color combination');
        }
        break;


    case 'blue':                     //blue imp outer case
        switch(color2){
            case 'yellow':
                console.log('green')
                break;
            case 'red':
                console.log('purple');
                break;  
     default:
        console.log('invalid color combination')
  }
  break;

 case 'yellow':      //yellow outer case
    switch(color2){
    case 'red':
        console.log('orange')
       break;
    
    case 'blue':
        console.log('green')
        break;
   
    default:
        console.log('invalid color combination')
    }
  break;

  default:
    console.log('invalid color combination');


  }

}

colorMixer('red','blue');
  colorMixer('blue','red');