
//race day
let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisterEarly = false;
let runnerAge = 9;

if (runnerAge > 18){
    raceNumber += 1000;
  if (runnerRegisterEarly) {
    console.log('You will start at 9:30 and your race number is ' +raceNumber);
  } else {
    console.log('Late adults run at 11:00am and your race number is ' +raceNumber);
  }
} else if (runnerAge < 18) {
  console.log('Youth registrants run at 12:30am and your race number is ' +raceNumber);
} else {
  console.log('You should see the registration desk');
}