type ObterKeyFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterKey: ObterKeyFn = (objeto, chave) => objeto[chave];

const animal = {
  color: 'Rosa',
  vaccines: ['Vacina 1', 'Vacina 2'],
  age: 10,
};

const vaccines = obterKey(animal, 'vaccines');
const color = obterKey(animal, 'color');

console.log(vaccines, color, obterKey(animal, 'age'));
