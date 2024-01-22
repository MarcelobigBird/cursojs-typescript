enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 'VERDE',
  ROSA = 'ROSA',
}

enum Cores {
  LILAS = 200,
  BEGE = 201,
  PRETO,
}

function choiceColor(cor: Cores): void {
  console.log(Cores[cor]);
}

choiceColor(Cores.ROXO);
