let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program');

secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');


//splice: remove existing elements and/or add new elements
secretMessage.splice(6, 5, 'know');  //replace 5 element at the 6th position by 'know'
console.log(secretMessage);
console.log(secretMessage.join(' ')); //join elements of array into a string and return this string 
