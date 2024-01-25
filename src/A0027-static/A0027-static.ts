export class Person {
  static ageStandard = 0;
  static cpfStandard = '000.000.000-00';

  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  public metodoNormal(): void {
    console.log(Person.ageStandard, Person.cpfStandard);
  }

  static createPerson(firstname: string, lastname: string): Person {
    return new Person(firstname, lastname, Person.ageStandard, Person.cpfStandard);
  }
}

const person1 = new Person('Luiz', 'Miranda', 30, '298.087.529-49');
const person2 = Person.createPerson('Maria', 'Miranda');
const person3 = new Person('Marcelo', 'Santos', 42, '298.081.528-48');

console.log(person1);
console.log(person2);
person3.metodoNormal();
