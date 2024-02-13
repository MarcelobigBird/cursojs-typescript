const object1: Record<string, string | number> = {
  firstname: 'Luiz',
  lastname: 'Miranda',
  age: 30,
};

console.log(object1);
console.log();

type PersonProtocol = {
  firstname?: string;
  lastname?: string;
  age?: number;
};

// Required -> Transforma todos os atributos que são opcionais em requirido

type PersonRequired = Required<PersonProtocol>;

const object2: PersonRequired = {
  firstname: 'Marcelo',
  lastname: 'Santos',
  age: 42,
};

console.log(object2);
console.log();

type PersonProtocol1 = {
  firstname: string;
  lastname: string;
  age: number;
};

// Partial -> Transforma todos os atributos que são requiridos em opcionais

type PersonPartial = Partial<PersonProtocol1>;

const object3: PersonPartial = {
  firstname: 'Leonardo',
  lastname: 'Leitão',
  // age: 40,
};

console.log(object3);
console.log();

type PersonProtocol2 = {
  firstname: string;
  lastname: string;
  age: number;
};

// Readonly -> Transforma todos os atributos para somente leitura

type PersonReadonly = Readonly<PersonProtocol2>;

const object4: PersonReadonly = {
  firstname: 'Daniel',
  lastname: 'Tapias',
  age: 48,
};

// object4.firstname = 'Paulo'; // não é possível atribuir outro valor porque e readonly

console.log(object4);
console.log();

type PersonProtocol3 = {
  firstname: string;
  lastname: string;
  age: number;
};

// Pick -> Voçê pode escolher os atributos que você quer do objeto

type PersonPick = Pick<PersonProtocol3, 'firstname' | 'lastname'>;

const object5: PersonPick = {
  firstname: 'Daniel',
  lastname: 'Tapias',
};

console.log(object5);
console.log();

// Exclude and Extract

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TypeExclude = Exclude<ABC, CDE>; // Exclude pega os tipos que estão em ABC que não estão em CDE

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TypeExtract = Extract<ABC, CDE>; // Pega todos os tipos que estão em ABC que podem ser atribuidos a CDE

// exemplo simulando uma api que recebe dados do mongo e transforma para dados de uma api

type AccountMongo = {
  _id: string;
  firstname: string;
  lastname: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdfgfgkkhghgu45gyhu45uy',
  firstname: 'Luiz',
  lastname: 'Miranda',
  age: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
}

const accountMaped = mapAccount(accountMongo);
console.log('API');
console.log(accountMaped);

export default 1;
