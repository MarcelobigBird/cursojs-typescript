type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // & é lido com AND

export const pessoa: Pessoa = {
  idade: 42,
  nome: 'Marcelo',
  sobrenome: 'Pereira dos Santos',
};

console.log(pessoa);
