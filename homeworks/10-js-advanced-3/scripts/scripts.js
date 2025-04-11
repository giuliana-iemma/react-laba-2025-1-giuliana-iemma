/* eslint-disable no-unused-vars*/

// Task 1 - https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }

  if (msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.length >= 264) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.match(/<[^>]+>/)) {
    return false;
  }

  return true;
}

//Task 2 - https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  let response = await fetch(apiUrl);
  let jokes = await response.json();

  //console.log(jokes.jokes)
  let setup, punchline;

  for (let item of jokes.jokes) {
    console.log(item);
    if (item.id === jokeId) {
      setup = item.setup;
      punchline = item.punchline;
    }
  }

  return {
    saySetup: () => setup,
    sayPunchLine: () => punchline,
  };
}

//Task 3 -  setTimeout/setInterval
function countSeconds() {
  let seconds = 0;

  let interval = setInterval(() => {
    seconds++; //We add one second
    console.log('Elapsed time: ', seconds); //Write the time elapsed in the consol

    if (seconds >= 5) {
      clearInterval(interval);
    }
  }, 1000);
}

countSeconds();

//Task 6

function checkDigit(string) {
  return /^d/.test(string);
}

console.log('String starts with d: ', checkDigit('dada'));
console.log('String starts with d: ', checkDigit('papa'));

//Task 7 - Optional

function checkPhoneNumber(number) {
  const regex = /^\+54\s?9?\s?\d{2,4}[\s-]?\d{3,4}[\s-]?\d{3,4}$/;

  return regex.test(number);
}

console.log(checkPhoneNumber('11655487'));
console.log(checkPhoneNumber('+5491165545875'));
console.log(checkPhoneNumber('+541165545875'));
console.log(checkPhoneNumber('+5465545875'));
