'use strict';

const domID = document.getElementById('domID');
const domClass = document.getElementsByClassName('domClass');
// function twoPies(first, second) {
// 	const pies = `Make two pies: ${first} pie and ${second} pie.`;
// 	return pies;
// }

// const mummyPies = twoPies('licorice', 'ginger');

// const kidPies = twoPies('M&M', 'Ice Cream');

// const adultPies = twoPies('whisky-peach', 'sherry-shrimp');

// domID.innerHTML = kidPies;

//function declaration

// function calcAgeism1(birthYear) {
// 	return 2037 - birthYear;
// }
// const ageism1 = calcAgeism1(1966);
// domID.innerHTML = `You will be ${ageism1} when the tech brings immortality.`;
// console.log(ageism1);

//function expression using anonymous function
// const calcAgeism2 = function(birthYear) {
// 	return 2037 - birthYear;
// };
// domID.innerHTML = `You will be made immortal in this function expression in your ${calcAgeism2(1966)}st year.`;
// console.log(calcAgeism2(1966));

//arrow function
// function calcAge3(birthYear) {
// 	return 2035 - birthYear;
// }

// const age3 = calcAge3(1966);
// domID.innerHTML = `They roused everone who was ${age3} years alive.`;
// const calcAge = function(birthYear) {
// 	return 2021 - birthYear;
// };

// const yearsToRetire = (birthYear, nickName) => {
// 	const age = calcAge(birthYear);
// 	const retirement = 67 - age;

// 	if (retirement > 10) {
// 		return (domID.innerHTML = `You've got ${retirement} years of runway left to take off!✈🚀🪂`);
// 	} else if (retirement > 0 && retirement < 9) {
// 		return (domID.innerHTML = `${nickName}, you're running out of runway, love. Just ${retirement} more years and you'll end up in the trees without a soft landing.😲`);
// 	} else {
// 		return (domID.innerHTML = `Having missed the mark by ${retirement *
// 			-1} years, you, ${nickName}, have done run off the runway!⏰🗑🛌⛴`);
// 	}
// };

// yearsToRetire(1966, 'Frostworthy');

// const calcAverage = (score1, score2, score3) => {
// 	const av = (score1 + score2 + score3) / 3;
// 	return (domID.innerHTML = `Your averaged score of ${av} 🏁points will place against the other contestants. The highest score average wins.`);
// };

// calcAverage(3, 4, 8);

// const cars = [ 'Camry', 'Audi', 'Saab', 'Subaru' ];

// let counter = 0;

// const writers = new Array('Joyce', 'Boston Girl', 'Davis', 'Rumi');
// domID.innerHTML = writers[2];
//const domSelector = document.querySelector('#stop');
// function chooseCar(){
    
    
//     if(counter < cars.length  ){
//         domSelector.innerHTML =` You can have ${cars[counter++]}, or make another selection.`;
//     } else {
//         domSelector.innerHTML = `Perhaps you prefer to bike?`;
//     }
    
// }
// document.querySelector('button').onclick = chooseCar;


// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('form').onsubmit = function() {
//         const name = document.querySelector('#name').value;
//          domSelector.innerHTML = `Hello, ${name}! Don't make any sudden moves.`;
        
//     };
// });

//color changer

document.addEventListener('DOMContentLoaded', () => {
    
//default button is disabled by default

document.querySelector('#submit').disabled = true;

//event listener for onkeyup
document.querySelector('#task').onkeyup = () => {
    if(document.querySelector('#task').value.length > 0){
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
    
}

    document.querySelector('form').onsubmit = () => {
        

           const task = document.querySelector('#task').value;

           let li = document.createElement('li');
           li.innerHTML = task;

            document.querySelector('#tasks').append(li);
            //clear field after submission
            document.querySelector('#task').value = '';
            //disable submit button
            document.querySelector('#submit').disabled = true;

            //keep form from submitting
            return false;
        }
        
});