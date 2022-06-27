/* eslint-disable complexity */
// Desafio 1
function compareTrue(b1, b2) {
  if (b1 && b2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(strArr) {
  return `${strArr[strArr.length - 1]}, ${strArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winScore = 3;
  let tieScore = 1;
  return winScore * wins + tieScore * ties;
}

// Desafio 6
function highestCount(numbers) {
  let highestNum = numbers[0];
  let counter = 0;
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > highestNum) {
      highestNum = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === highestNum) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultStr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      resultStr.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      resultStr.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      resultStr.push('buzz');
    } else {
      resultStr.push('bug!');
    }
  }
  return resultStr;
}

// Desafio 9
function encode(decodedStr) {
  let newStr = decodedStr
    .replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return newStr;
}

function decode(encodedStr) {
  let decodedStr = encodedStr
    .replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return decodedStr;
}

// Desafio 10
function techList(techs, person) {
  if (techs.length === 0 || person.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  let techsWithName = [];
  for (let tech of techs) {
    techsWithName.push({ tech: tech, name: person });
  }
  return techsWithName;
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
