/*  1. Opposite number 
https://www.codewars.com/kata/opposite-number */
function opposite(number) {
  if (number === 0) {
    return number;
  } else {
    return -number;
  }
}

console.log('1. Opposite - Test', opposite(1));

/* 2. Basic Mathematical Operations 
  https://www.codewars.com/kata/basic-mathematical-operations */
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;

    case '*':
      return value1 * value2;

    case '/':
      return value1 / value2;

    default:
      return 0;
  }
}

console.log('2. Basic Mathematical Operations - Test', basicOp('+', 4, 7));

/* 3. Printing Array elements with Comma delimiters 
  https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters */
function printArray(array) {
  return array.join(',');
}

console.log(printArray(['lemon', 'apple', 'orange']));

/* 4. Transportation on vacation
https://www.codewars.com/kata/transportation-on-vacation */
function rentalCarCost(day) {
  let costPerDay = 40;
  let total = day * costPerDay;

  if (day >= 7) {
    return total - 50;
  } else if (day >= 3 && day < 7) {
    return total - 20;
  } else {
    return total;
  }
}

console.log('4. Transportation on vacation', rentalCarCost(3));

/* 5. Calculating with Functions 
 https://www.codewars.com/kata/calculating-with-functions */

//If the function receives an operation, returns the operation(left), if not, it returns the number to be used in the operation as right.
function zero(operation = null) {
  return operation ? operation(0) : 0;
}
function one(operation = null) {
  return operation ? operation(1) : 1;
}
function two(operation = null) {
  return operation ? operation(2) : 2;
}
function three(operation = null) {
  return operation ? operation(3) : 3;
}
function four(operation = null) {
  return operation ? operation(4) : 4;
}
function five(operation = null) {
  return operation ? operation(5) : 5;
}
function six(operation = null) {
  return operation ? operation(6) : 6;
}
function seven(operation = null) {
  return operation ? operation(7) : 7;
}
function eight(operation = null) {
  return operation ? operation(8) : 8;
}
function nine(operation = null) {
  return operation ? operation(9) : 9;
}

function plus(right) {
  return function (left) {
    return left + right;
  };
}

function minus(right) {
  return function (left) {
    return left - right;
  };
}

function times(right) {
  return function (left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function (left) {
    let division = left / right;
    return parseInt(division);
  };
}

console.log(
  '5.  Calculating with Functions -',
  seven(times(five())),
  four(plus(nine())),
  eight(minus(three())),
  six(dividedBy(two())),
  zero(plus(one()))
);

/* 6. Get the Middle Character 
https://www.codewars.com/kata/get-the-middle-character */
function getMiddle(string) {
  let stringLength = string.length;

  if (stringLength % 2 === 0) {
    //It's even -> return the middle 2 characters
    return string.slice(stringLength / 2 - 1, stringLength / 2 + 1);
  } else if (stringLength % 2 !== 0) {
    //It's odd, return the middle character
    let indexCharacter = parseInt(stringLength / 2);

    return string.slice(indexCharacter, indexCharacter + 1);
  } else {
    return '';
  }
}

console.log('6. Get the Middle Character -', getMiddle('chai'));

/* 7. Partition On
https://www.codewars.com/kata/partition-on */

function partitionOn(pred, items) {
  let trueItems = [];
  let falseItems = [];

  for (let item of items) {
    let parted = pred(item);

    if (parted) {
      trueItems.push(item);
    } else {
      falseItems.push(item);
    }
  }

  items.splice(0, items.length, ...falseItems, ...trueItems);

  console.log(items);
  return falseItems.length;
}

let items = [1, 2, 3, 4, 5, 6];
function isEven(n) {
  return n % 2 == 0;
}

console.log(' 7. Partition On -', partitionOn(isEven, items));

/* 8. Find the odd int 
https://www.codewars.com/kata/find-the-odd-int/*/
function findOdd(array) {
  let appearances = {};

  //Count the appearances
  for (let item of array) {
    if (appearances[item]) {
      //This is not the first time we encounter the number
      appearances[item]++;
    } else {
      //This is the first time we encounter the number
      appearances[item] = 1;
    }
  }

  //Search the one that appears and odd number of times
  for (let number in appearances) {
    if (appearances[number] % 2 !== 0) {
      return parseInt(number); //parseInt to convert the key of the object (string) to number
    }
  }
}

console.log('8. Find the odd int -', findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

/* 9. Find The Parity Outlier 
https://www.codewars.com/kata/find-the-parity-outlier */
function findOutlier(array) {
  //Get the first three items
  let odd = 0;
  let even = 0;

  let slicedArray = array.slice(0, 3);

  //Analize whether they are odd or even
  for (let item of slicedArray) {
    if (item % 2 === 0) {
      even++;
    } else if (item % 2 !== 0) {
      odd++;
    }
  }

  //Check if the majority is odd or even
  for (let item of array) {
    console.log('odd', odd, 'even', even);
    if (odd > even) {
      console.log('gana odd');
      if (item % 2 === 0 || item === 0) {
        console.log(item, array);
        return item;
      }
    } else if (even > odd) {
      console.log('gana even');
      if (item % 2 != 0) {
        console.log(item, array);
        return item;
      }
    }
  }
}

console.log('9. Find The Parity Outlier -', findOutlier([0, 1, 2]));

/* 10. zipWith 
https://www.codewars.com/kata/zipwith */
function zipWith(func, array1, array2) {
  let result = [];

  let length1 = array1.length;
  let length2 = array2.length;

  let shortestLength = length1 < length2 ? length1 : length2;

  for (let i = 0; i < shortestLength; i++) {
    console.log(array1[i]);
    console.log(array2[i]);

    result.push(func(array1[i], array2[i]));
    console.log('result', result);
  }

  return result;
}

const plus2 = (a, b) => a + b;

console.log(
  '10. zipWith -',
  (zipWith(plus2, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6, 6])
);

/* 11. Filter the number 
https://www.codewars.com/kata/filter-the-number */
function filterString(value) {
  let numbers = [];

  for (let item of value) {
    if (
      item == 0 ||
      item == 1 ||
      item == 2 ||
      item == 3 ||
      item == 4 ||
      item == 5 ||
      item == 6 ||
      item == 7 ||
      item == 8 ||
      item == 9 ||
      item == 10
    ) {
      numbers.push(item);
    }
  }

  return Number(numbers.join(''));
}

console.log('11. Filter the number -', filterString('123'));

/* 12. N-th Fibonacci 
https://www.codewars.com/kata/n-th-fibonacci */
function nthFibo(number) {
  let numbers = [0, 1];
  let counter = 0;
  let numberPosition = number--; //Get the actual index of the number

  for (let i = 0; i <= numberPosition; i++) {
    let total = numbers[counter] + numbers[counter + 1];
    numbers.push(total);
    counter++;
  }

  return numbers[number];
}

console.log('12. N-th Fibonacci -', nthFibo(1));

/* 13. Cat and Mouse - 2D Version 
https://www.codewars.com/kata/cat-and-mouse-2d-version/ */
function catMouse(map, availableMoves) {
  //Split the map into rows.
  let rows = map.split('\n');

  let catPosition, mousePosition;

  //Find if there is both cat and mouse
  if (!map.includes('C') || !map.includes('m')) {
    return 'boring without two animals';
  } else {
    //Save their positions
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].includes('C')) {
        catPosition = [i, rows[i].indexOf('C')];
        console.log('position', catPosition);
      }

      if (rows[i].includes('m')) {
        mousePosition = [i, rows[i].indexOf('m')];
        console.log('position', mousePosition);
      }
    }

    //Calculate the distance btw cat and mouse. Manhattan distance
    //row difference + column difference
    let rowDifference = Math.abs(catPosition[0] - mousePosition[0]);

    let columnDifference = Math.abs(catPosition[1] - mousePosition[1]);

    let difference = rowDifference + columnDifference;

    console.log(difference);

    //Compare the distance to the allowed moves
    if (difference <= availableMoves) {
      return 'Caught!';
    } else {
      return 'Escaped!';
    }
  }
}

let map = `..C......
.........
....m....`;

console.log('13. Cat and Mouse - 2D Version - ', catMouse(map, 5));

/* 14. Duplicate Encoder 
https://www.codewars.com/kata/duplicate-encoder */
function duplicateEncode(word) {
  let charactersAppearances = {}; //Object to save all characters and times
  let newWord = '';

  let wordSplitted = word.toLowerCase().split(''); //Separate each character and turn into array
  console.log(wordSplitted);

  for (let letter of wordSplitted) {
    if (charactersAppearances[letter]) {
      charactersAppearances[letter]++;
    } else {
      charactersAppearances[letter] = 1;
    }
  }

  console.log(charactersAppearances);

  wordSplitted.forEach((letter) => {
    if (charactersAppearances[letter] == 1) {
      newWord += '(';
    } else {
      newWord += ')';
    }
  });

  console.log(newWord);
  return newWord;
}

console.log(' 14. Duplicate Encoder -', duplicateEncode('din'));

/* 15. Build Tower 
https://www.codewars.com/kata/576757b1df89ecf5bd00073b */
function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let stars = '*'.repeat(2 * i + 1); //Add one star + 2 times i.

    let spaces = ' '.repeat(nFloors - i - 1);
    //As the number increases, we need fewer spaces.

    tower.push(spaces + stars + spaces);
  }

  // console.log(tower)
  return tower;
}
console.log('15. Build Tower - ', towerBuilder(3));

/* 16. Mexican Wave 
https://www.codewars.com/kata/58f5c63f1e26ecda7e000029 */
function wave(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let stringSplitted = string.split('');
    if (stringSplitted[i] != ' ') {
      stringSplitted[i] = stringSplitted[i].toUpperCase();
      let newString = stringSplitted.toString();
      result.push(newString.replace(/,/gi, ''));
    }
  }
  console.log(result);
  return result;
}

console.log('16. Mexican Wave -', wave('hello'));

/* 17. String Breakers (retired)
 https://www.codewars.com/kata/59d398bb86a6fdf100000031 */
function stringBreakers(number, string) {
  let result = [];

  let separator = string.length / number;

  string = string.replace(/\s+/g, '');

  for (let i = 0; i < separator * number; i += number) {
    let cutString = string.substring(i, i + number);
    result.push(cutString);
  }

  return result.toString().replace(/,/gi, '\n');
}

console.log('17. String Breakers -', stringBreakers(5, 'This is an example string'));

/* 18.  Extract the domain name from a URL
https://www.codewars.com/kata/514a024011ea4fb54200004b */
function domainName(url) {
  let slicedUrl = url; //Starts as url in case nothing needs to be spliced
  let separatedUrl;

  //Remove protocol
  if (url.startsWith('http://')) {
    slicedUrl = url.slice(7);
  } else if (url.startsWith('https://')) {
    slicedUrl = url.slice(8);
  }

  if (slicedUrl.startsWith('www.')) {
    slicedUrl = slicedUrl.slice(4);
  }

  console.log(slicedUrl);

  separatedUrl = slicedUrl.split('.');

  console.log(separatedUrl);

  return separatedUrl[0];
}

console.log('18.  Extract the domain name from a URL -', domainName('http://google.com'));

/* 19. Additive Numbers 
https://www.codewars.com/kata/5693239fb761dc8670000001 */
function findAdditiveNumbers(numbers) {
  let length = numbers.length;

  //Try all combinations possible
  for (let i = 1; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let number1 = numbers.slice(0, i);
      console.log('num1', number1);
      let number2 = numbers.slice(i, j);
      console.log('num2', number2);

      //Validate zeros
      if (
        (number1.length > 1 && number1[0] === '0') ||
        (number2.length > 1 && number2[0] === '0')
      ) {
        continue; //We ignore and continue with next iteration
      }

      let sequence = [number1, number2];
      let start = j;

      while (start < length) {
        let sum = (parseInt(number1) + parseInt(number2)).toString();
        console.log('sum', sum);

        if (!numbers.startsWith(sum, start)) {
          //Search if the number that comes after j is the same as the sum. If not, break.
          break;
        }

        //Add the number to the sequence and update values
        sequence.push(sum);
        start += sum.length;
        number1 = number2;
        number2 = sum;
      }

      //Validate that all the chain and that we are in the end of it
      if (start === length && sequence.length > 2) {
        return sequence;
      }
    }
  }

  return [];
}

console.log('19. Additive Numbers - ', findAdditiveNumbers('112358'));
