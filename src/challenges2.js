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

// Desafio 13
function hydrate(drinks) {
  const totalWaters = drinks.match(/\d/g).map((drink) => +drink).reduce((acc, crr) => acc + crr);
  return totalWaters > 1 ? `${totalWaters} copos de água` : `${totalWaters} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
