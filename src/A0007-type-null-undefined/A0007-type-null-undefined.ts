let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

console.log();

// Função com type annotation

export function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

const person = createPerson('Marcelo');
console.log(person.firstName);

console.log();

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf('2');

if (squareOfTwoNumber !== null) {
  console.log(squareOfTwoNumber * 100);
} else {
  console.log('conta inválida');
}
