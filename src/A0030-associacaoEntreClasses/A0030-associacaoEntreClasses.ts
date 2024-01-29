export class Escritor {
  private _tool: Ferramenta | null = null;

  constructor(private _firstname: string) {}

  get firstname(): string {
    return this._firstname;
  }

  get ferramenta(): Ferramenta | null {
    return this._tool;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._tool = ferramenta;
  }

  public write(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }

    this.ferramenta.write();
  }
}

export abstract class Ferramenta {
  constructor(private _firstname: string) {}

  public abstract write(): void;

  public get firstname(): string {
    return this._firstname;
  }
}

export class Caneta extends Ferramenta {
  public write(): void {
    console.log(`${this.firstname} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  public write(): void {
    console.log(`${this.firstname} está digitando...`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Ibm');

console.log(escritor.firstname);
console.log(caneta.firstname);
console.log(maquinaEscrever.firstname);

console.log();

escritor.ferramenta = caneta;
escritor.write();

console.log();

escritor.ferramenta = maquinaEscrever;
escritor.write();

console.log();
escritor.ferramenta = null;
escritor.write();
