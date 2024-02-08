type MyType = number;

export const arrayNumbers: Array<MyType> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumbers);

console.log();

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
myPromise().then((resultado) => console.log(resultado + 1));
