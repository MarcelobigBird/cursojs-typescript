function decorator(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        return (valueProperty = value.split('').reverse().join(''));
      }
      valueProperty = value;
    },
  };
}

export class OnePerson {
  @decorator
  public firstname: string;
  @decorator
  public lastname: string;
  @decorator
  public age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  public speek(msg: string): string {
    return `${this.firstname} ${this.lastname} ${msg}`;
  }

  public get nameCompleted(): string {
    return this.firstname + ' ' + this.lastname;
  }

  public set nameCompleted(value: string) {
    const words = value.split(/\s+/g);
    const firstname = words.shift();
    if (!firstname) return;
    this.firstname = firstname;
    this.lastname = words.join(' ');
  }
}

const onePerson = new OnePerson('Marcelo', 'Pereira dos Santos', 42);

console.log(onePerson.speek('está estudando javascript.'));
console.log();

onePerson.nameCompleted = 'Luiz Otávio Miranda';
console.log(onePerson.nameCompleted);
