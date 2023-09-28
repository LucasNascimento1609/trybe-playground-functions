// Desafio 1
function compareTrue(parametro1, parametro2) {
  return parametro1 && parametro2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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

// Desafio 9
function encode(stringEncode) {
  let stringSeparada = stringEncode.split('');
  let stringCodificada = [];

  for (let i = 0; i < stringEncode.length; i += 1) {
    switch (stringSeparada[i]) {
    case 'a':
      stringCodificada.push('1');
      break;
    case 'e':
      stringCodificada.push('2');
      break;
    case 'i':
      stringCodificada.push('3');
      break;
    case 'o':
      stringCodificada.push('4');
      break;
    case 'u':
      stringCodificada.push('5');
      break;
    default:
      stringCodificada.push(stringSeparada[i]);
      break;
    }
  }

  return stringCodificada.join('');
  // Aprendi a usar o .split e .join ao buscar em outro exercício como trazer uma string de trás para frente no StackOverflow: https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript
}

function decode(stringDecode) {
  let stringSeparada = stringDecode.split('');
  let stringDecodificada = [];

  for (let i = 0; i < stringDecode.length; i += 1) {
    switch (stringSeparada[i]) {
    case '1':
      stringDecodificada.push('a');
      break;
    case '2':
      stringDecodificada.push('e');
      break;
    case '3':
      stringDecodificada.push('i');
      break;
    case '4':
      stringDecodificada.push('o');
      break;
    case '5':
      stringDecodificada.push('u');
      break;
    default:
      stringDecodificada.push(stringSeparada[i]);
      break;
    }
  }

  return stringDecodificada.join('');
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
