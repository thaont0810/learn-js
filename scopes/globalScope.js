// global scope: variables outside of {}.
// global variables make data accessible from any place within a program

const satellite  = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: '+satellite +', ' +stars +', ' +galaxy;
}
console.log(myNightSky());


//block scope: variable in block only accessible within  {}
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if(region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
}
visibleLightWaves();

// block scope defined within  'for' loop
const starCount = () => {
  let i = 5;
  console.log(i);
  for (i = 0; i <12; i ++) {
    console.log(i);
  }
}
starCount();
console.log(i);



