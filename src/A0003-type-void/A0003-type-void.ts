function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz Otávio',
  sobrenome: 'Miranda',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz Otávio', 'Miranda');
pessoa.showName();

export { pessoa };
