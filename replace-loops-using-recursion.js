/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion */

function sum(arr, n) {
  if (n <= 0) { // Base case: if n is less than or equal to 0, return 0
    return 0;
  } 
  else if (n > 0) { // Recursive case: if n is greater than 0 
    console.log(arr, n); // Print the current numbers in the array and n
    return sum(arr, n - 1) + arr[n - 1]; // Recursive call to sum function with updated parahhhhhhhhhhmeters
  }
}
// Function call with array [2, 3, 4] and n = 3
sum([2, 3, 4], 3)
          