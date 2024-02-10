// Criei um filter com generic

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function myFilterComGeneric<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// com generic não precisa fazer teste
const arrayFilteredGeneric = myFilterComGeneric(arrayNumber, (value) => value < 5);
console.log('Filter usando generic');
console.log(arrayFilteredGeneric);

console.log();

// usei o filter nativo do javascript

const arrayFilteredOriginal = arrayNumber.filter((value) => value < 5);
console.log('Filter nativo do javascript');
console.log(arrayFilteredOriginal);

console.log();

// criei um filter sem usar generic

type Filter = (value: unknown, index?: number, array?: unknown[]) => boolean;

function meuFilterSemGeneric(array: unknown[], callbackFn: Filter) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) newArray.push(array[i]);
  }

  return newArray;
}

const arrayNumber1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sem generic precisa fazer teste
const arrayFilteredSemGeneric = meuFilterSemGeneric(arrayNumber1, (value) => {
  if (typeof value === 'number') return value > 5;

  return false;
});

console.log('Filter sem generic');
console.log(arrayFilteredSemGeneric);
console.log();

// Filter atrelado ao prototype com generic
interface Array<T> {
  myFilterComPrototype(callbackFn: (value: T, index?: number, array?: T[]) => boolean): T[];
}

Array.prototype.myFilterComPrototype = function <T>(
  callbackFn: (value: T, index?: number, array?: T[]) => boolean,
): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const arrayNumero: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoPrototype = arrayNumero.myFilterComPrototype((valor) => valor < 5);

console.log('Filter atrelado ao prototype usando generic');
console.log(arrayFiltradoPrototype);

console.log();

type ArrayFilterFunction<T> = (value: T, index?: number, array?: T[]) => boolean;

interface Array<T> {
  myFilterComPrototype(callbackFn: ArrayFilterFunction<T>): T[];
}

Array.prototype.myFilterComPrototype = function <T>(callbackFn: ArrayFilterFunction<T>): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const arrayNumero2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoPrototype1 = arrayNumero2.myFilterComPrototype((valor) => valor < 5);

console.log('Filtro vinculado ao protótipo usando type e interface com generic');
console.log(arrayFiltradoPrototype1);
