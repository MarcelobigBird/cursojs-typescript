type TypeFirstname = {
  firstname: string;
};

type TypeLastname = {
  lastname: string;
};

type TypeFirstnameComplete = {
  firstnameComplete(): string;
};

// Ou pode usar um type: type Type Person = { firstname: string, lastname: string, firstnameComplete(): string}

export class Person implements TypeFirstname, TypeLastname, TypeFirstnameComplete {
  constructor(
    public firstname: string,
    public lastname: string,
  ) {}

  public firstnameComplete(): string {
    return this.firstname + ' ' + this.lastname;
  }
}

const person = new Person('Luiz', 'Miranda');
console.log(person.firstnameComplete());
