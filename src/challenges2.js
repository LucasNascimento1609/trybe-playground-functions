// Desafio 10
function techList(techs, name) {
  if (!techs.length) return 'Vazio!';

  return techs.sort().map((tech) => ({ tech, name }));
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const checkNumbers = numbers.some((number) => {
    const repeats = numbers.filter((num) => num === number).length;
    return number < 0 || number > 9 || repeats >= 3;
  });

  const areaCode = numbers.slice(0, 2).join('');
  const phoneNumber = `${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`;
  const wrongNumbers = 'não é possível gerar um número de telefone com esses valores';

  return checkNumbers ? wrongNumbers : `(${areaCode}) ${phoneNumber}`;
}

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  for (let index = 0; index < 3; index += 1) {
    const lines = [lineA, lineB, lineC];
    const currentLine = lines.splice(index, 1);
    if (currentLine[0] < lines[0] + lines[1]) {
      return currentLine[0] > Math.abs(lines[0] - lines[1]);
    }
  }
    return true;
  }

  // Aqui pesquisei e testei como funciona o Math.abs: https://www.w3schools.com/java/ref_math_abs.asp
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let numberOfDrinks = drinks.match(/\d/g);
  let totalDrinks = 0;

  for (let i = 0; i < numberOfDrinks.length; i += 1) {
    totalDrinks += parseInt(numberOfDrinks[i]);
  }

  if (totalDrinks > 1) {
    return totalDrinks + ' copos de água';
  }
  return totalDrinks + ' copo de água';

  // Pesquisei como retirar somente números de uma string e isso me levou ao .match. Depois pesquisei como tranformar uma string em um número, o que me levou ao parseInt. Ambos eu pesquisei mais a fundo suas funcionalidades no W3Schools e MDN Web Docs
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
