/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops */

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}
  while (i >= 10 && i < 20); //original line is `while (i < 11);` but, I changed it to see diff results in terminal.

  console.log(myArray);