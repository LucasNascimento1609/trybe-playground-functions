// Desafio 10
function techList(techNames, name) {
  let orderedTechNames = techNames.sort();
  let techList = [];

  for (let i = 0; i < orderedTechNames.length; i++) {
    let techItem = {};
    techItem.tech = techNames[i];
    techItem.name = name;
    techList.push(techItem);
  }

  if (techNames.length > 0) {
    return techList;
  }
  return 'Vazio!';

  // Encontrei o .sort aqui: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let wrongNumber of numbers) {
    if (wrongNumber < 0 || wrongNumber > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let repeatNumbers = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      repeatNumbers += numbers[i] === numbers[j];
      if (repeatNumbers > 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  let phoneNumber = ['('];

  for (let i = 0; i < numbers.length; i += 1) {
    switch (phoneNumber.length) {
      case 1:
        phoneNumber.push(numbers[i]);
        break;
      case 2:
        phoneNumber.push(numbers[i] + ') ');
        break;
      case 3:
        phoneNumber.push(numbers[i]);
        break;
      case 4:
        phoneNumber.push(numbers[i]);
        break;
      case 5:
        phoneNumber.push(numbers[i]);
        break;
      case 6:
        phoneNumber.push(numbers[i]);
        break;
      case 7:
        phoneNumber.push(numbers[i] + '-');
        break;
      case 8:
        phoneNumber.push(numbers[i]);
        break;
      case 9:
        phoneNumber.push(numbers[i]);
        break;
      case 10:
        phoneNumber.push(numbers[i]);
        break;
      case 11:
        phoneNumber.push(numbers[i]);
        break;
      default:
        break;
    }
  }

  return phoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = true;
  let checkB = true;
  let checkC = true;

  if (lineA < lineB + lineC) {
    checkA = lineA > Math.abs(lineB - lineC);
  }

  if (lineB < lineA + lineC) {
    checkB = lineB > Math.abs(lineA - lineC);
  }

  if (lineC < lineA + lineB) {
    checkC = lineC > Math.abs(lineA - lineB);
  }

  if (checkA === true && checkB === true && checkC === true) {
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
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
