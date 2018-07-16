
// if/esle statement
let myName = false;
if(myName === true) {
  console.log('My name is Pet');
} else {
  console.log('Oops! No name');
}

// true/false values
let myPet =  'Puppy';

if (myPet){ //if myPet contains a truthy value, do this
  console.log(`Ohh. I love ${myPet} too`);
} else { //myPet contains a falsy value, do 
  console.log(`I hate ${myPet}`);
}

let numberOfDog= 0;
if(numberOfDog) {
  console.log('I find ' +numberOfDog+ ' dog'); // this code not run bcz  0 = falsy value
}else {
  console.log('No dog found');
}

let isBlueSky = true;
if(isBlueSky) {
  console.log('Lets go out to play.');
} else {
  console.log('We should be at home on cloudy day');
}

let isBf = true;
if (!isBf) {
  console.log('Lets find someone or youre fa forever T.T');
} else {
  console.log('Ok. No need to find. I have one here :)))')
}


let hungerLevel = 5;
function hungry(hungerLevel){
  if (hungerLevel >= 7) {
    console.log('Time to eat!');
  } else {
    console.log('We can eat later!');
  }
}
hungry();


// let moonPhase = 'full';
// if (moonPhase === true) {
//   console.log('Howl!');
// } else {
//   console.log('I swear I am not a werewolf');
// }

// else if

// let moonPhase = 'full';
// let isFoggyNight = true;
// if (moonPhase === 'full' || isFoggyNight === false){
  
// } else if (moonPhase=== 'mostly full') {
//   console.log('Arms and legs are getting hairier.');
// } else if (moonPhase === 'mostly new') {
//   console.log('Back on two feet.');
// } else {
//   console.log('Invalid moon phase');
// }


// switch
let moonPhase = 'full';
switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier.');
    break;
  case 'mostly new':
    console.log('Back on two feet.');
    break;
  default:
   console.log('Invalid moon phase');
 	 break;
}

// Ternary Operator : refactor simple if/else statements.
let isLocked = false;
isLocked? console.log('Find a key to open the door.'): //isLocked = true
console.log('The door already opens');

let favAnimal = 'Dog';
favAnimal === 'Dog'? console.log('Well, I love it too'):
console.log('I like other animals');
