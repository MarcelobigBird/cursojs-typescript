@decorator
export class Animal {
  constructor(
    public firstname: string,
    public color: string,
  ) {}
}

// eslint-disable-next-line
function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
