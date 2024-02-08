// criei um filter sem usar generic

type Filter = (value: unknown, index?: number, array?: unknown[]) => boolean;

function meuFilterSemGeneric(array: unknown[], callbackFn: Filter) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) newArray.push(array[i]);
  }

  return newArray;
}

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

// usei o filter nativo do javascript

const arrayFilteredOriginal = arrayNumber.filter((value) => value < 5);
console.log(arrayFilteredOriginal);

console.log();

// com generic não precisa fazer teste

const arrayFilteredGeneric = myFilterComGeneric(arrayNumber, (value) => value < 5);

console.log(arrayFilteredGeneric);

console.log();

// sem generic tem que fazer teste

const arrayFilteredSemGeneric = meuFilterSemGeneric(arrayNumber, (value) => {
  if (typeof value === 'number') return value > 5;

  return false;
});

console.log(arrayFilteredSemGeneric);
