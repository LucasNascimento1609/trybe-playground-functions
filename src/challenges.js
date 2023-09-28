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
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      count = 1;
    } else if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const firstCatDistance = Math.abs(cat1 - mouse);
  const secondCatDistance = Math.abs(cat2 - mouse);

  if (firstCatDistance < secondCatDistance) {
    return 'cat1';
  } if (secondCatDistance < firstCatDistance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    } if (number % 3 === 0) {
      return 'fizz';
    } if (number % 5 === 0) {
      return 'buzz';
    } return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  const code = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  return string.split('').map((letter) => code[letter] || letter).join('');
}

function decode(string) {
  const code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  return string.split('').map(((letter) => code[letter] || letter)).join('');
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
