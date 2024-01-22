type Age = number;

type Person = {
  firstName: string;
  age: Age;
  wage: number;
  favoriteColor?: FavoriteColor;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type FavoriteColor = CorRGB | CorCMYK;

export const person: Person = {
  age: 30,
  firstName: 'Marcelo',
  wage: 200_000,
};

console.log();

export function setColorFavorite(person: Person, color: FavoriteColor) {
  return { ...person, favoriteColor: color };
}

console.log(setColorFavorite(person, 'Azul'));
console.log(person);
