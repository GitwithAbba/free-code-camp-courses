//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
const x = 5;
// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
  }

  //let a = countdown(10);
  console.log(countdown(10));
// Here is the same code using a ternary operator. he spread operator (...) is used to insert the elements of the array returned by countdown(n - 1) into the new array.
  /*function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}

console.log(countdown(5));*/
  // Only change code above this line

  /*function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));*/

  