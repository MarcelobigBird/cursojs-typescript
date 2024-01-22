// Unknown é semelhante ao any porém é mais seguro, você tem que fazer uma checagem antes de usar

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
