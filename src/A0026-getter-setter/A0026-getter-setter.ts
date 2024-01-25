export class Person {
  constructor(
    private readonly firstname: string,
    private readonly lastname: string,
    private readonly age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  public set cpf(value: string) {
    console.log('SETTER CHAMADO');
    this._cpf = value;
  }

  public get cpf(): string {
    console.log('GETTER CHAMADO');
    return `${this.firstname} ${this.lastname} tem ${this.age} anos, tem o cpf: ${this._cpf.replace(/\D/g, '').slice(0, 9)}`;
  }
}

const person = new Person('Luiz', 'Miranda', 30, '298.087.529-49');
console.log((person.cpf = '298.087.529-00')); // Usando a atribuição eu acesso o setter para setar outro valor
console.log(person.cpf); // Usando a notação ponto eu acesso o getter
