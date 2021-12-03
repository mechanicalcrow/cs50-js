'use strict';

// document.querySelectorAll('button').forEach( (button) => {
//     button.onclick = () => {
//         document.querySelector('#colors').style.color = button.dataset.color;
//     }
// });

document.querySelector('select').onchange = () => {
    document.querySelector('#colors').style.color = this.value;
}

