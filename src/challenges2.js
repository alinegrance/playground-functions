/* eslint-disable no-else-return */
/* eslint-disable complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
// Desafio 11
function generatePhoneNumber(numbers) {
  // create obj with num frequencies
  const frequencies = {};
  for (let number of numbers) {
    if (number in frequencies) {
      frequencies[number] += 1;
    } else {
      frequencies[number] = 1;
    }
  }

  // test for length
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // test if any number shows more than 3 times
  for (let key in frequencies) {
    if (frequencies[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // test for < 0 or > 9
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  let numberPattern = /\d+/g;
  let numberStr = drinks.match(numberPattern); //string
  let numbers = [];
  for (let number of numberStr) {
    numbers.push(Number(number));
  }
  let sum = 0;
  for (let number of numbers) {
    if (number >= 1 && number <= 9) {
      sum += number;
    }
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
