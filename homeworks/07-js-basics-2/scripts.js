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
function getEvenNumbers(numbersArray) {
  let evenNumbers = [];

  numbersArray.filter((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });

  return evenNumbers;
}

/* 5. Max-min arrays  https://www.codewars.com/kata/5a090c4e697598d0b9000004 */
function solve(numbers) {
  let arrangedNumbers = numbers.sort((a, b) => b - a);
  console.log(arrangedNumbers);
  let rearrangedNumbers = [];

  for (let i = 0; i <= Math.floor(numbers.length / 2); i++) {
    if (numbers.length % 2 !== 0) {
      rearrangedNumbers.push(arrangedNumbers[i]);

      if (i === Math.floor(numbers.length / 2)) {
        continue;
      }

      rearrangedNumbers.push(arrangedNumbers[numbers.length - i - 1]);
    } else {
      if (i > Math.floor(numbers.length / 2) - 1) {
        continue;
      }

      rearrangedNumbers.push(arrangedNumbers[i]);
      rearrangedNumbers.push(arrangedNumbers[numbers.length - i - 1]);
    }
  }

  return rearrangedNumbers;
}

/* 6. Return a string's even characters. https://www.codewars.com/kata/566044325f8fddc1c000002c*/
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }

  let stringSplitted = string.split('');
  let result = [];

  for (let i = 1; i <= string.length - 1; i += 2) {
    console.log('i', i);
    result.push(stringSplitted[i]);
  }

  return result;
}

/* 7. Find the middle element. https://www.codewars.com/kata/545a4c5a61aa4c6916000755 */
function gimme(triplet) {
  let tripletSorted = triplet.slice().sort((a, b) => a - b); //Reorder but making a copy of the original.
  let middleNumber = tripletSorted[1]; //Save the middle number

  for (let i = 0; i < 3; i++) {
    if (triplet[i] === middleNumber) {
      return i; //Return the index of the number equal to middleNumber
    }
  }
}

/* 8. Ones and Zeros https://www.codewars.com/kata/578553c3a1b8d5c40300037c */
const binaryArrayToNumber = (array) => {
  let binaryNumber = array.toString().replace(/,/g, '');
  console.log(binaryNumber);

  let integerNumber = parseInt(binaryNumber, 2); //2 is the code for binary based number

  return integerNumber;
};

/* 9. Find the unique number. https://www.codewars.com/kata/585d7d5adb20cf33cb000235 */
//First try
function findUniq0(array) {
  //Check two numbers
  //If different, check the next one to see which one it matches
  //Return the one different

  for (let i = 0; i < array.length; i++) {
    let differentNumber;

    if (array[i] !== array[i + 1]) {
      //1st different to 2nd
      if (array[i] !== array[i + 2]) {
        //1st is different to third
        differentNumber = array[i]; //1st is the different one
        //1ST IS DIFFERENT
        return differentNumber;
      } else {
        //1st is equal to the third and different to the second
        //2ND IS DIFFERENT
        differentNumber = array[i + 1];

        return differentNumber;
      }
    } else {
      //1st is equal to 2nd
      if (array[i] === array[i + 2]) {
        //1st is equal to 3rd. Next iteration
        continue; //
      }
      differentNumber = array[i + 2];
      return differentNumber;
    }
  }
}

//Better for performance
function findUniq(array) {
  console.log(array);
  //Check the first three to see which number is a majority
  let majority = array[0] === array[1] ? array[0] : array[2];
  //Look in all the array until it finds the diff one
  let different = array.find((different) => different !== majority);

  return different;
}

/* 10. Decipher this! - https://www.codewars.com/kata/581e014b55f2c52bb00000f8 */
function decipherThis(string) {
  let stringWords = string.split(' ');

  let realString = [];

  console.log('original string, lets work on', stringWords);

  for (let i = 0; i < stringWords.length; i++) {
    let wordLetters;

    //Iterate this word
    wordLetters = stringWords[i].split('');

    //Find first letter
    let charCode = '';
    let indexRemove = [];

    for (let letter of wordLetters) {
      if (!isNaN(parseInt(letter))) {
        //Check the first characters and see if they are numbers. Build the charCode
        charCode += letter;
        indexRemove.push(wordLetters.indexOf(letter));
      }
    }

    //Save first letter
    let firstLetter = String.fromCharCode(parseInt(charCode));
    //Remove charCode from word
    wordLetters.splice(indexRemove[0], indexRemove.length, firstLetter);

    //Save Second letter
    let secondLetter = wordLetters[wordLetters.length - 1];

    //Save Last letter
    let lastLetter = wordLetters[1];
    wordLetters.splice(1, 1, secondLetter);
    wordLetters.splice(wordLetters.length - 1, 1, lastLetter);

    //Buildre realString array
    realString.push(wordLetters.toString().replace(/,/g, ''));
  }

  //Return the real phrase
  return realString.toString().replace(/,/g, ' ');
}

/* 11. Sort the odd https://www.codewars.com/kata/578aa45ee9fd15ff4600090d */
function sortArray(numbers) {
  let oddNumbers = [];
  let oddNumbersIndexes = [];
  //Get all the odd numbers and arrange them
  for (let number of numbers) {
    console.log('number', number, numbers);

    if (number % 2 !== 0) {
      oddNumbers.push(number);
      //Get all the indexes for those
      oddNumbersIndexes.push(numbers.indexOf(number));
    }
  }

  console.log(oddNumbers, oddNumbersIndexes);

  //Arrange oddNumbers
  oddNumbers = oddNumbers.sort((a, b) => a - b);

  //Replace each position with the one that corresponds
  for (let i = 0; i < oddNumbers.length; i++) {
    numbers.splice(oddNumbersIndexes[i], 1, oddNumbers[i]);
  }

  console.log(numbers);
  return numbers;
}

/* Optional */
/* 1. PaginationHelper - https://www.codewars.com/kata/515bb423de843ea99400000a */
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
      return -1;
    }

    if (this.pageCount() !== 1) {
      //There is more than one page
      if (pageIndex === this.pageCount() - 1) {
        //We are in the last page.
        return this.itemCount() - this.itemsPerPage * (this.pageCount() - 1);
      } else {
        //We are not in the last page
        return this.itemsPerPage;
      }
    } else {
      //There is only one page
      return this.itemCount();
    }
  }

  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range

    //Invalid cases
    if (itemIndex > this.itemCount() || itemIndex < 0 || this.collection.length === 0) {
      return -1;
    }

    //Get each page

    for (let i = 1; i <= this.pageCount() + 1; i++) {
      let page = i; //Save i in a variable

      if (itemIndex < this.pageItemCount() * i) {
        //If itemIndex is smaller than the elements that have already been shown, the element is the current iterated page
        return page - 1;
      }
    }
  }
}

/* 2. Moving Zeros To The End - https://www.codewars.com/kata/52597aa56021e91c93000cb0 */
function moveZeros(array) {
  let counter = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      counter.push(array[i]);
      array.splice(i, 1);
      console.log(array);
    }
    continue;
  }

  return array.concat(counter);
}

/* 3. Find the unique string -  https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3 */
//I changed the name of the function because there's already one with that name in this file.
//The original name in kata is: findUniq

function findUniq2(array) {
  let elements = [];

  //Iterate over each element in the array to see if it includes the element of the former
  let normalized = array.map((word) => word.toLowerCase().split('').sort().join(''));

  console.log(normalized);

  for (let i = 0; i < normalized.length; i++) {
    //Iterate each element of the array, meaning each word
    let element1 = normalized[i];
    let element2 = normalized[i + 1].split('');

    for (let letter of element2) {
      if (!element1.includes(letter)) {
        //If a letter in element2 isn't included in element1, return element2 from the original array
        return array[i + 1];
      }
    }
  }
}

/*4.Sudoku Solver - https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript  */
//Stil working on it
