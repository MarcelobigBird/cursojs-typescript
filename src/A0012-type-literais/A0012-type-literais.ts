console.log('Exemplo 1');
console.log();

let x = 10;  // eslint-disable-line
x = 0b1010;

const y = 10;
let a = 100 as const;  // eslint-disable-line

console.log(x, y);

console.log();
console.log('exemplo 2');

const person = {
  firstName: 'Luiz' as const,
  lastName: 'Miranda',
};

console.log(person);

console.log();
console.log('exemplo 3');

export function choiceColor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(choiceColor('Amarelo'));

// Module mode

export default 1;
