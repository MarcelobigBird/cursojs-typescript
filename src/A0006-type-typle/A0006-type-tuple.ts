// Tuple

const dadosCliente1: readonly [number, string] = [1, 'Luiz']; // imutável
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Marcelo', 'Pereira dos Santos']; // ? -> opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Marcelo', 'João', 'Paulo', 'Cesar'];

dadosCliente2[0] = 100;

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array

const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);
