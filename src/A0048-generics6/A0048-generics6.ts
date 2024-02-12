export function joinObject<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const person = {
  firstname: 'John',
  lastname: 'Stewart',
};

const address = {
  road: 'Merino',
  number: 37,
  neighborhood: 'Jd. Julieta',
  city: 'São Paulo',
  state: 'São Paulo',
};

const unity = joinObject(person, address);
console.log(unity);
