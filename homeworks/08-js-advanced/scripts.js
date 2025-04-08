/* eslint-disable no-unused-vars */

// Task 1 - Pluck
const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

const randomValue = Math.random();
const nullValue = null;

function pluck(object, path) {
  //Check if the input is a non-null object.
  if (object === null || typeof object !== 'object') {
    return null;
  }

  //Split the path by dots
  const keys = path.split('.');
  console.log(keys);
  let result = object;

  console.log(result);

  for (let key of keys) {
    //Check if the key is missing
    if (result && typeof result === 'object' && key in result) {
      //Result is an object and the key exists there, we add it to the result
      result = result[key];
    } else {
      return null;
    }
  }

  return result;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

//Task 2 -  Deep Clone
function clone(user) {
  return JSON.parse(JSON.stringify(user));
}

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue);

//Task 3 -  "A long time ago"

// const moment = require('moment');
import moment from 'moment';

function offset(pastMoment, format) {
  //Obtain the amount of time btw the past date and the current
  const now = moment(); //Present

  const past = moment(pastMoment, format); //Past

  let result = [];

  //Years
  let years = now.diff(past, 'years');

  if (years > 1) {
    result.push(years + ' years');
  } else if (years === 1) {
    result.push(years + ' year');
  }

  console.log(result);

  past.add(years, 'years'); //We add the years to the past date

  //Months
  let months = now.diff(past, 'months');
  console.log(months);

  if (months > 1) {
    result.push(months + ' months');
  } else if (months === 1) {
    result.push(months + ' month');
  }

  past.add(months, 'months'); //We add the months to the past date

  //Days
  let days = now.diff(past, 'days');
  console.log(days);

  past.add(days, 'days');

  if (days > 1) {
    result.push(days + ' days');
  } else if (days === 1) {
    result.push(days + ' day');
  }

  //Hours
  let hours = now.diff(past, 'hours');
  console.log(hours);
  past.add(hours, 'hours');

  //Minuts
  let minutes = now.diff(past, 'minutes');
  console.log(minutes);

  past.add(minutes);

  if (minutes > 1) {
    result.push(minutes + ' minutes');
  } else if (minutes === 1) {
    result.push(minutes + ' minute');
  }

  return result.toString().replace(/,/g, ', ');
}

// E.g. Today is 23.02.2021, 14:00:00
console.log(offset(moment('23/02/2021 13:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 30 minutes ago

console.log(offset(moment('23/02/2021 13:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 hour ago

console.log(offset(moment('23/02/2021 11:30:00', 'DD/MM/YYYY hh:mm:ss')));
// 2 hours 30 minutes ago

console.log(offset(moment('22/02/2021 14:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 1 day ago

console.log(offset(moment('23/02/2020 10:00:00', 'DD/MM/YYYY hh:mm:ss')));
// 366 days ago

//Task 4 - Random dates
const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/02/2021', 'DD/MM/YYYY');

function randomDate(date1, date2) {
  //Turn into miliseconds
  let date1Ms = date1.valueOf();
  let date2Ms = date2.valueOf();

  console.log(date1Ms, date2Ms);

  //Aleatory number btw both
  let randomMs = date1Ms + Math.random() * (date2Ms - date1Ms);
  console.log(randomMs);

  //Create a moment using the aleatory number
  return moment(randomMs);
}

console.log(randomDate(date1, date2).format('DD/MM/YY'));
console.log(randomDate(date1, date2).format('DD/MM/YY'));
console.log(randomDate(date1, date2).format('DD/MM/YY'));

//Task 5 - Merged Objects https://www.codewars.com/kata/merged-objects
function objConcat(array) {
  //Concat the objects
  console.log(array);
  const result = {};
  //Interate the first object
  for (let object of array) {
    console.log(object);

    for (let key in object) {
      console.log(key, object[key]);
      result[key] = object[key];
      console.log('result', result);
    }
  }

  return result;
}
var a = { 1: '1', 2: '2', 3: '3' },
  b = { 3: '4', 5: '6', 6: '7', 7: '8' },
  c = { 5: '9', 8: '9', 6: '12', 23: '35' },
  o = [a, b, c];

//Task 6 - "this" is an other problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  // -- SHOULD be changed --
  let firstName = first;
  let lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;

  //Public property for firstName
  Object.defineProperty(this, 'firstName', {
    get: () => firstName, //If there is no value, we obtain the data
    set: (value) => {
      firstName = value; //If there is a value, we change it
    },
  });

  //Public property for lastName
  Object.defineProperty(this, 'lastName', {
    get: () => lastName, //If there is no value, we obtain the data
    set: (value) => {
      lastName = value; //If there is a value, we change it
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: () => `${firstName} ${lastName}`,

    set: (value) => {
      const parts = value.split(' '); //We split the value in two words

      if (parts.length === 2) {
        firstName = parts[0]; //The first word is the name
        lastName = parts[1]; //The second word is the lastname
      }
    },
  });
}
