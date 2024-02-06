type Vehicle = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Vehicle['marca'];
  year: Vehicle['ano'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'F14000',
};

console.log(car);
