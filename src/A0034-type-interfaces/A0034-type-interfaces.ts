interface TypeFirstname {
  firstname: string;
}

interface TypeLastname {
  lastname: string;
}

interface TypeFirstnameComplete {
  firstnameComplete(): string;
}

interface TypePerson extends TypeFirstname, TypeLastname, TypeFirstnameComplete {}

// Ou você pode usar uma interface: interface TypePerson {firstname: string; lastname: string,firstnameComplete: string}

export class Person implements TypePerson {
  constructor(
    public firstname: string,
    public lastname: string,
  ) {}

  public firstnameComplete(): string {
    return this.firstname + ' ' + this.lastname;
  }
}

const person = new Person('Luiz', 'Miranda');
console.log(person);
console.log(person.firstnameComplete());

console.log();

const objectPerson: TypePerson = {
  firstname: 'Marcelo',
  lastname: 'Santos',

  firstnameComplete() {
    return this.firstname + ' ' + this.lastname;
  },
};

console.log(objectPerson);
console.log(objectPerson.firstnameComplete());
