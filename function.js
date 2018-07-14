// parameter

// const takeOrder = (topping) => {
//   console.log('Order: pizza topped with ' +topping);
// };
// takeOrder('mushrooms');

// return instead of using console.log
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount += 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
const getTax= (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}
const getTotal= (itemCount)=> {
  return getSubTotal(itemCount) + getTax(itemCount);
}

console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount));

// function declarations
function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}
isGreaterThan(1,8);


// rock, paper, scissors
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('error');
  }
}
console.log(getUserChoice('Rock'));