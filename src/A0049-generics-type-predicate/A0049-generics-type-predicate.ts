export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const back = args.reduce((acumulador, value) => {
    if (isNumber(acumulador) && isNumber(value)) return acumulador + value;
    return acumulador;
  }, 0);
  return back;
}

console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(sum('a', 'b', 'c'));
