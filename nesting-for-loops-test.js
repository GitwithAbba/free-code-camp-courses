let arr = [
  [1, 2], 
  [3, 4], 
  [5, 6, 7]
]

// position   0  1  2  3  4  5  6 =  INDEX / WHERE IS
let jarr2 = [ 1, 2, 3, 4, 5, 6, 7 ]
// incriment  1  2  3  4  5  6  7 =  COUNTING / HOW MANY
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  //for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
    console.log(arr[i][j]);
  //} 
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// questions about arry indexing
//    IF 7 is less than zero then add one to zero


// array index position  PARENT                     0                                1                                                  2
// nested index array position CHILD     0        1        2            0         1        2            0        1        2        3        4        5   
// nested index array VALUE position   0  1     0  1    0  1  2        0  1     0  1    0  1  2        0  1     0  1    0  1  2    0  1     0  1   0   1  2
                                    [ [1, 2],  [3, 4], [5, 6, 7] ], [ [1, 7],  [3, 4], [9, 6, 7] ], [ [6, 2],  [3, 4], [5, 0, 7], [6, 2],  [3, 4], [5, 0, 7] ]


                                    2,0,1 = 6 - 2
                                    0,1,2 = 4 - n/a
                                    1,1,1 = 4 - correct
                                    2,4,1 = 4 - correct

const outerArray = [[1, 2], [3, 4], [5, 6, 7]];

for (let i = 0; i < outerArray.length; i++) {
  const currentSubArray = outerArray[i];
  console.log(currentSubArray);
}                                    