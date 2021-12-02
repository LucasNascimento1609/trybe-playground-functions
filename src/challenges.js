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
function catAndMouse() {
  // seu código aqui
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
