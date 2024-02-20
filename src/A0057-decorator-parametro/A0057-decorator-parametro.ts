// eslint-disable-next-line
function decorator(classPrototype: any, nameMethod: string | symbol, index: number): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class OnePerson {
  public firstname: string;
  public lastname: string;
  public age: number;

  constructor(@decorator firstname: string, @decorator lastname: string, @decorator age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  public speek(@decorator msg: string): string {
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

const onePerson = new OnePerson('Luiz', 'Otávio Miranda', 45);
onePerson.nameCompleted = 'Marcelo Pereira dos Santos';

console.log(onePerson.speek('está estudando typescript.'));
