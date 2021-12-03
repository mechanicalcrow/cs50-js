'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//  //default submit button off   
// document.querySelector('#submit').disabled = true;

// //onkeyup activates function
// document.querySelector('#task').onkeyup = () => {
// //conditions for enabling and disabling submit button
//     if (document.querySelector('#task').value.length > 0 ) {
//         document.querySelector('#submit').disabled = false;
//     } else {
//         document.querySelector('#submit').disabled = true;
//     }
    
// }

//     document.querySelector('form').onsubmit = () => {

        
//         //assign input field value to variable
//         const task = document.querySelector('#task').value;

        
//         //create li element for ul element
//         let li = document.createElement('li');
//            li.innerHTML = task;
//            document.querySelector('#tasks').append(li);
           

        
//         //clear input field
//            document.querySelector('#task').value = '';
//            //disable submit button
//            document.querySelector('#submit').disabled = true;
//         return false;

//     }



// });

document.querySelector('#task').onkeyup = () => {

    if(document.querySelector('#task').value.length > 0){
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
}


document.querySelector('form').onsubmit = ()=> {

    const task = document.querySelector('#task').value;
    let li = document.createElement('li');
    li.innerHTML = task;

    document.querySelector('#tasks').append(li);

document.querySelector('#task').value = '';
document.querySelector('#submit').disabled = true;
    return false;
}

window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector('body').style.background = 'red' ;
    } else {
        document.querySelector('body').style.background = 'blue' ;
    }
}

const body = document.body.offsetHeight;
console.log(body);