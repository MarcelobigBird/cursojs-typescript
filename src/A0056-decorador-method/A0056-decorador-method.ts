// eslint-disable-next-line
function decorador(classPrototype: any, nameMethod: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  public firstname: string;
  public lastname: string;
  public age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  @decorador
  public speek(msg: string): string {
    return `${this.firstname} ${this.lastname}: ${msg}`;
  }

  public get firstnameCompleted(): string {
    return this.firstname + ' ' + this.lastname;
  }

  public set firstnameCompleted(value: string) {
    const words = value.split(/\s+/g);
    const firstname = words.shift();
    if (!firstname) return;
    this.firstname = firstname;
    this.lastname = words.join('');
  }
}

console.log();
const person = new OnePerson('Marcelo', 'Pereira dos Santos', 40);

console.log(person.speek('Hello world!!!'));
