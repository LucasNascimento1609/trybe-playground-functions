/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(sentence) {
  let separador = sentence.split(' ');
  return separador;
}

// Desafio 4
function concatName(arrayNomes) {
  // eslint-disable-next-line prefer-template
  let nomes = arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0];
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let highestNumberRepeat = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (numbers[i] >= numbers[j] && numbers[i] >= highestNumber) {
        highestNumber = numbers[i];
      }
    }
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      highestNumberRepeat += 1;
    }
  }

  return highestNumberRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  if (mouse < cat1) {
    distanceCat1 = cat1 - mouse;
  } else {
    distanceCat1 = mouse - cat1;
  }

  if (mouse < cat2) {
    distanceCat2 = cat2 - mouse;
  } else {
    distanceCat2 = mouse - cat2;
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumeros[i] % 5 === 0) {
      resultado.push('buzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

let teste1 = [2, 15, 7, 9, 45];
let teste2 = [7, 9];
let teste3 = [9, 25];

console.log(fizzBuzz(teste1));
console.log(fizzBuzz(teste2));
console.log(fizzBuzz(teste3));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
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
};
