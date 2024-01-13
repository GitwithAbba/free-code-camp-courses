let count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6 && card > 1) {
    count = count + 1;
    console.log(count, "Bet");
    //return (count, "Bet");
  }
  else if (card >= 7 && card <= 9) {
    count = count + 0;
    console.log(count, "Hold");
    //return (count, "Hold");
  }
  else {
    count = count - 1;
    console.log(count, "Hold");
    //return (count, "Hold");
  }
  //return count;
  let totalSum = count;
  console.log(totalSum);
  //return "Change Me";
  // Only change code above this line
}
//cc("K");
cc(2); cc(3); cc(7); cc('K'); cc('A');
//cc(2); cc(3); cc(4); cc(5); cc(6);
/*card >= 9 || card == "J" || card == "Q" || card == "K" || card == "A"*/