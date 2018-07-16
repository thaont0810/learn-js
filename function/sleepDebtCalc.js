const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Error!';
      break;
  }
}
//console.log(getSleepHours('monday'));

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') 
  + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours*7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours = idealSleepHours) {
    console.log('You got the perfect amount of sleep :)');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed');
  } else {
    console.log('You should get more rest');
  }
}
calculateSleepDebt();


