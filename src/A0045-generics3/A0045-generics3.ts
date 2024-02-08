interface PersonProtocol<T, U> {
  firstname: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  firstname: T;
  lastname: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  firstname: 'Luiz',
  lastname: 'Miranda',
  age: 30,
};

console.log(student1);
console.log();

const student2: PersonProtocol<number, number> = {
  firstname: 123,
  lastname: 456,
  age: 40,
};

console.log(student2);
console.log();

const student3: PersonProtocol2 = {
  firstname: 'Leonardo',
  lastname: 'Leitão',
  age: 45,
};

console.log(student3);
