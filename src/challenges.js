/* eslint-disable default-case */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(p1, p2) {
  return p1 && p2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arr) {
  let firstAndLast = [];
  firstAndLast.push(arr[arr.length - 1]);
  firstAndLast.push(arr[0]);
  let store = `${firstAndLast[0]}, ${firstAndLast[1]}`;
  return store;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let store = arr[0];
  let repeat = [];
  for (let number = 0; number < arr.length; number += 1) {
    if (arr[number] > store) {
      store = arr[number];
    }
  }
  for (let value of arr) {
    if (value === store) {
      repeat.push(value);
    }
  }
  return repeat.length;
}
// ver se consigo fazer da segunda parte uma função e retornar essa função

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  for (let value = 0; value < arr.length; value += 1) {
    if (arr[value] % 3 === 0 && arr[value] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arr[value] % 5 === 0) {
      result.push('buzz');
    } else if (arr[value] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  } return result;
}

function encrypt(letter) {
  switch (letter) {
  case 'a': letter = 1;
    break;
  case 'e': letter = 2;
    break;
  case 'i': letter = 3;
    break;
  case 'o': letter = 4;
    break;
  case 'u': letter = 5;
    break;
  }
  return letter;
}

function vowel(letter) {
  switch (letter) {
  case 'a': letter = true;
    break;
  case 'e': letter = true;
    break;
  case 'i': letter = true;
    break;
  case 'o': letter = true;
    break;
  case 'u': letter = true;
    break;
  default: letter = false;
  }
  return letter;
}

// Desafio 9
function encode(str) {
  let myString = str;
  let encoded = '';
  for (let letter = 0; letter < myString.length; letter += 1) {
    let check = vowel(myString[letter]);
    if (check === true) {
      let encryption = encrypt(myString[letter]);
      encoded += encryption;
    } else {
      encoded += myString[letter];
    }
  }
  return encoded;
}

function decrypt(number) {
  switch (number) {
  case '1': number = 'a';
    break;
  case '2': number = 'e';
    break;
  case '3': number = 'i';
    break;
  case '4': number = 'o';
    break;
  case '5': number = 'u';
    break;
  }
  return number;
}

function isNumber(num) {
  switch (num) {
  case '1': num = true;
    break;
  case '2': num = true;
    break;
  case '3': num = true;
    break;
  case '4': num = true;
    break;
  case '5': num = true;
    break;
  default: num = false;
  }
  return num;
}

function decode(str) {
  let myString = str;
  let decoded = '';
  for (let letter = 0; letter < myString.length; letter += 1) {
    let check = isNumber(myString[letter]);
    if (check === true) {
      let decryption = decrypt(myString[letter]);
      decoded += decryption;
    } else {
      decoded += myString[letter];
    }
  }
  return decoded;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
