// rule for translating text to whale speak
      // no consonants (phụ âm), only vowels(nguyên âm) , not 'y'
      // 'u', 'e' double 


let input = 'thao is my name';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('inputIndex is ' +i);
  for(let j = 0; j < vowels.length; j++) {
    //console.log( 'j is ' +j);
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if(input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
}
console.log(resultArray.join('').toUpperCase());
      
      
      


