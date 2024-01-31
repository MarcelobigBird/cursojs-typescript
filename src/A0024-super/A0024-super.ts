export class Person {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
    protected readonly age: number,
    protected readonly cpf: string,
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
    console.log('Fazendo algo antes');
    return 'Isso vem do student ' + super.getFirstNameComplete();
  }
}
export class Client extends Person {
  public readonly wage: number;
  constructor(firstname: string, lastname: string, age: number, cpf: string, wage: number) {
    super(firstname, lastname, age, cpf);
    this.wage = wage;
  }
  public getFirstNameComplete(): string {
    return `The client: ${this.firstname} ${this.lastname} tem ${this.age} anos, tem o cpf: ${this.cpf} recebeu o $salário de R$ ${this.wage} reais`;
  }
}

const person = new Person('Wanderley', 'Gadelha', 42, '111.111.111-11');
const student = new Student('Wanderley', 'Gadelha', 42, '111.111.111-11');
const client = new Client('Wanderley', 'Gadelha', 42, '111.111.111-11', 2_500_00);

console.log(person.getFirstNameComplete());

console.log();
console.log(student.getFirstNameComplete());

console.log();
console.log(client);
console.log(client.getFirstNameComplete());
