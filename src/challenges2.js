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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13mas
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
