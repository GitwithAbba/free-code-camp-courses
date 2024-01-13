//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords

//The reason why the for loop with the var in it prints out 3 is because, "i" was globally updated on the 3rd iteration when i++ occured changing "var i" to 3 and since the foor loop with the let in it doesn't have a globally declared let, the last line of code produces an error "i is not defined" leaving console.log(printNumTwo()); to print out 2 because when i became 2, the printNumTwo  = function() line ran through

//for loop with var
/*var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());*/

//for loop with let
let printNumTwo;
for (let i = 0; i < 3; i++) {
    console.log(i);
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
};
console.log(printNumTwo());
console.log(i);

//let variable with function and block scope
/* function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
} */