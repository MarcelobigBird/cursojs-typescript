// eslint-disable-next-line
function reverseNameColor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi', target);
  return class extends target {
    color: string;

    // eslint-disable-next-line
    constructor(...args: any[]) {
      super(...args);
      this.firstname = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    public reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@reverseNameColor
export class Animal {
  constructor(
    public firstname: string,
    public color: string,
  ) {
    console.log('sou a classe');
  }
}

const animal = new Animal('Fumaça', 'black');
console.log(animal);
