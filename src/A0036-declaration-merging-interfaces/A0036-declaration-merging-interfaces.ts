interface Person {
  firstname: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly address: string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  firstname: 'Luiz',
  lastname: 'Miranda',
  address: ['Av. Brasil'],
  age: 42,
};

person.address.push('Rua merino', 'Rua da cavalgada');
console.log(person);
