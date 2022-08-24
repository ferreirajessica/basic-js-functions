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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
