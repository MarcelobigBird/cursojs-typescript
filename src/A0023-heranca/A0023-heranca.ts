export class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFirstNameComplete(): string {
    return this.firstname + ' ' + this.lastname;
  }
}

export class Student extends Person {
  public getFirstNameComplete(): string {
    return 'Isso vem do student: ' + this.firstname + ' ' + this.lastname;
  }
}
export class Client extends Person {
  public getFirstNameComplete(): string {
    return 'Isso vem do client: ' + this.firstname + ' ' + this.lastname;
  }
}

const person = new Person('Wanderley', 'Gadelha', 42, '111.111.111-11');
const student = new Student('Wanderley', 'Gadelha', 42, '111.111.111-11');
const client = new Client('Wanderley', 'Gadelha', 42, '111.111.111-11');

console.log(person.getFirstNameComplete());
console.log(student.getFirstNameComplete());
console.log(client.getFirstNameComplete());
