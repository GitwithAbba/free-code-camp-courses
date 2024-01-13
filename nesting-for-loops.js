/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops */

function multiplyAll(arr) { //function with 1 parameter
  let product = 1; // variable that can be updated
  // Only change code below this line
for (let i = 0; i < arr.length; i++) { //outer for loop with the variable i set to 0, the condition is i less than the length of the array, if true, add 1 to the variable i
  for (let j = 0; j < arr[i].length; j++) { // inner for loop with variable j set to 0, the condition is j less than the length of the sub array, if true, add 1 to the variable j
    product *= arr[i][j]; // product variable which is 1 equals 1 times the first subarray (0 less than 0) and product times the first number in the subarray which would also be 0 less than 0
    console.log(arr[i][j]); // print to terminal the function outer for loop reuslt and the inner for loop result
    //console.log(product); // print to the terminal what the product has been updated to after both for loops have fully iterated
  } 
}
  // Only change code above this line
  return product; // store the value of newly updated product value
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // calling the function multiplyAll to run