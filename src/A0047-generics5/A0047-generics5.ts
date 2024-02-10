export class Person<T, U> {
  constructor(
    public firstname: T,
    public age: U,
  ) {}
}

const person1 = new Person('Marcelo', 40);
const person2 = new Person('Luiz', 45);
const person3 = new Person('Leonardo', 42);
console.log(person1, person2, person3);

console.log();
export class Stack<T> {
  private counter = 0;
  private elements: { [E: number]: T } = {};

  public push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  public pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  public isEmpty(): boolean {
    return this.counter === 0;
  }

  public size(): number {
    return this.counter;
  }

  public showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number | string>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('string');
console.log(stack);

console.log();
while (!stack.isEmpty()) {
  console.log(stack.pop());
}

console.log();
console.log(stack.size());

console.log();
stack.push('Luiz');
stack.push('Leonardo');
stack.push('Daniel');

console.log();
stack.showStack();

console.log();
console.dir(stack);
