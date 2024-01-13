function rangeOfNumbers(startNum, endNum) {
    if (endNum <= startNum)
        return [startNum];
    else {
        const arrayNumbers = rangeOfNumbers(startNum, endNum - 1);
        arrayNumbers.push(endNum);
        return arrayNumbers;
    }
  };

  console.log(rangeOfNumbers(1, 10));