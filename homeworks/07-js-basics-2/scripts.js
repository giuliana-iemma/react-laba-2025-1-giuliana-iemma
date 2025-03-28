/* eslint-disable no-unused-vars */

/* 1. Sum of positive - https://www.codewars.com/kata/5715eaedb436cf5606000381 */

function positiveSum(numbers) {
  let positiveNumbers = []; //Array to save all positive numbers
  let sum = 0; //Sum initialized in 0 -> default return

  if (numbers.length > 0) {
    //If there is at least one number in the array
    for (let number of numbers) {
      //Save all the positive numbers
      if (number > 0) {
        positiveNumbers.push(number);
      }
    }

    //Sum all the numbers
    for (let number of positiveNumbers) {
      console.log('num', number);
      sum += parseInt(number);
    }
  }

  return sum;
}

/* 2. Simple consecutive pairs - https://www.codewars.com/kata/5a3e1319b6486ac96f000049*/
function pairs(array) {
  let consecutivePairs = []; //Array to save the pairs that are consecutive
  let i = 0;
  let j = 1;

  for (let number of array) {
    while (j <= array.length) {
      console.log('j', j);
      let number1 = array[i];
      let number2 = array[j];

      if (Math.abs(number2 - number1) == 1) {
        //If they are consecutive, save the pair in the array of consecutive pairs
        let pair = [number1, number2];

        consecutivePairs.push(pair);

        i += 2; //Move to the next pair
        j += 2; //Move to the next pair
      } else {
        //If they are not consecutive,

        i += 2; //Move to the next pair
        j += 2; //Move to the next pair
      }
    }
  }

  return consecutivePairs.length;
}

/* 3. Maximum Multiple - https://www.codewars.com/kata/5aba780a6a176b029800041c */
function maxMultiple(divisor, bound) {
  let counter = bound;

  while (counter <= bound && counter > 0) {
    //N is less than or equal to bound?
    //N is greater than 0?

    if (counter % divisor == 0) {
      //N is divisible by divisor ?
      //We try with from the largest to the smallest.
      console.log(counter, 'is divisible by', divisor);
      return counter; //When find one that's divisible by divisor, return it.
    }
    //If it's not divisible.
    counter--; //We try the next posible number.
  }
}

/* 4. JavaScript Array Filter (retired) https://www.codewars.com/kata/514a6336889283a3d2000001 */
