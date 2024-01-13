  // LINK - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range
  
  // Declare a function called 'randomRange' which takes two parameters - 'myMin' and 'myMax'. 
  function randomRange(myMin, myMax) {
    // The 'Math.random()' function returns a floating-point, pseudo-random number in the range 0–1. 
    // We multiply this by 'myMax - myMin + 1' to get a number within the desired range. 
    // The '+1' is to ensure the maximum number is included in our range.
    // 'Math.floor()' is then used to round our number down to the nearest whole number. 
    // Finally, we add 'myMin' to shift our range up to start at the minimum number.
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  // Here, we are calling our function using 'console.log()' so that we can see the result in the console. 
  // Our function 'randomRange()' will return a random number between 5 and 100.
  console.log(randomRange(5, 100)) 

