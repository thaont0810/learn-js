// arrays: organize & store data


const newYearsResolutions = ['Toof', 'Xam', 'Phoc'];

//newYearsResolutions[1] = 'Learn a new language'; // update index 1 from 'xam' to 'learn a new language'
const listItem = newYearsResolutions[0];

console.log(newYearsResolutions[1]); 
// console.log(newYearsResolutions[2]);
// console.log(newYearsResolutions[3]);



// find length of array
console.log(newYearsResolutions.length);

// push method: add item to the end of array
newYearsResolutions.push('Ngoc', 'Tolon');
console.log(newYearsResolutions);

// pop: remove the last item of array...
newYearsResolutions.pop();
console.log(newYearsResolutions);

//shift: remove 1st item of array
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList);

groceryList.shift();
console.log(groceryList);

//unshift: add item to the beginning of array
let groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList1.unshift('popcorn');
console.log(groceryList1);

//slice: copy array
let groceryList2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList2.slice('');
console.log(groceryList2);

let groceryList3 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList3.slice(1, 4)); //pick up banana, cf beas, and brown rice


// array with let & const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments.push('Salt');
console.log(condiments);

condiments = ['Salt']; //console 'Salt'

//console.log(utensils.pop()); // output: Spork
utensils.pop();
console.log(utensils); // output: Fork, Knife, Chopsticks
utensils = ['Forks']; // make error bcz of const











