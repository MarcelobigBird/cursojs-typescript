// Encadeamento opcional e Operador de coalecência nula

type Document = {
  title: string;
  text: string;
  data?: Date;
};

export const document: Document = {
  title: 'O título',
  text: 'O texto',
  data: new Date(),
};

console.log(document.data?.toDateString() ?? 'Ixi1, Não existe data.');
console.log(undefined ?? 'Ixi2, Não existe data.');
console.log(null ?? 'Ixi3, Não existe data.');
console.log(false ?? 'Ixi4, não existe data.');
console.log(0 ?? 'Ixi5, não existe data.');
console.log('' ?? 'Ixi6, não existe data.');
