'use strict';

let counter = 0;
if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    
    document.querySelector('#counter').innerHTML = counter;
    localStorage.setItem('counter', counter);
    const night = document.querySelector('#counter');
    if(counter % 5 === 0 || counter % 3 === 0){
        night.innerHTML = `Bish ${counter}`;
    } else if (counter % 2 === 0 || counter % 7 === 0) {
        night.innerHTML = `Bash ${counter}`;
    } else {
        night.innerHTML = `Boo! ${counter}`;
    }
    document.querySelector('#counter').style.color = "ivory";
}

function uncount() {
    let counter = localStorage.getItem('counter');
    counter--;
    
    document.querySelector('#counter').innerHTML = counter;
    localStorage.setItem('counter', counter);
    
    if(counter < 0){
        document.querySelector('#counter').style.color = "red";
     } 

     // a way out of red keep commented to served as security dye
     //else  {
    //     document.querySelector('#counter').style.color = "ivory";
    // }
    
}


document.addEventListener('DOMContentLoaded', () => {
document.querySelector('h2').innerHTML = localStorage.getItem('counter');
document.querySelector('#plus').onclick = count;
document.querySelector('#minus').onclick = uncount;
//  setInterval(count, 3000);



});
