// for: loop a block of code a known amount of times
// while: loop a block of code an unknown amout of times.

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for(let vacationSpotIndex = 0; vacationSpotIndex  < vacationSpots.length; vacationSpotIndex  ++) {
  console.log('I would love to visit ' +vacationSpots[vacationSpotIndex ]);
}


//run backward 
let vacationSpots1 = ['Mozambique', 'Thailand', 'Bolivia'];

for(let vacationSpotIndex  = vacationSpots.length -1; vacationSpotIndex >= 0 ; vacationSpotIndex--) {
  console.log('I would love to visit ' +vacationSpots1[vacationSpotIndex ]);
}

//nested for loops: Every time the outer for loop runs once, the inner for loop will run completely.
let myPlaces = ['Korea', 'England', 'Japan'];
let friendPlaces = ['France', 'Korea', 'America'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex ++) {
  //console.log(myPlaces[myPlacesIndex]);
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    //console.log(friendPlaces[friendPlacesIndex]);
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log('Match: ' +myPlaces[myPlacesIndex]);
    }
  }
}



// while Loop
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

// let currentCard = 'Spade';
let currentCard = 'Heart';


while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}
console.log('Current card is ' +currentCard);
console.log('You found a spade!');


