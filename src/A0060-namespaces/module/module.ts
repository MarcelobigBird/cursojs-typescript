/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNameSpace {
  export const firstnameNamespace = 'Luiz';

  export class PersonNamespace {
    constructor(public firstname: string) {}
  }

  const personNameSpace = new PersonNamespace(firstnameNamespace);
  console.log(personNameSpace);

  export namespace OutroNamespace {
    export const firstNamespace = 'nome do outro namespace';
  }
}

const personNameSpace = new MyNameSpace.PersonNamespace(MyNameSpace.firstnameNamespace);
console.log(personNameSpace);

console.log();
console.log(MyNameSpace.OutroNamespace.firstNamespace);

console.log();
const constDoNamespace = 'Valor da const do namespace';
