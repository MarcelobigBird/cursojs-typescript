export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 5));
console.log(add('a', 'b'));

console.log();

type Person = { tipo: 'person'; firstname: string };
type Animal = { tipo: 'animal'; color: string };
type PersonAnimal = Person | Animal;

export class Student implements Person {
  tipo: 'person' = 'person';
  constructor(public firstname: string) {}
}

function showFirstname(obj: PersonAnimal): void {
  // if ('firstname' in obj) console.log(obj.firstname);
  // if (obj instanceof Aluno) console.log(obj.firstname);

  switch (obj.tipo) {
    case 'person': {
      console.log(obj.firstname);
      return;
    }

    case 'animal': {
      console.log('Isso é um animal', obj.color);
      return;
    }
  }
}

showFirstname(new Student('João'));
showFirstname({ tipo: 'animal', color: 'White' });
