// Desafio 10
function techList(techNames, name) {
  let orderedTechNames = techNames.sort();
  let techList = [];

  for (let i = 0; i < techNames.length; i++) {
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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
