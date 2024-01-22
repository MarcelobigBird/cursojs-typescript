const objetoA: {
  readonly chaveA: string; // somente leitura
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objetoA.chaveB = 'outro valor';
objetoA.chaveC = 'Nova chance';
objetoA.chaveD = 'valorD';

console.log(objetoA);
