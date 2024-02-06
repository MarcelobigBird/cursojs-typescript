export class Calculadora {
  constructor(public numero: number) {}

  public add(n: number): this {
    this.numero += n;
    return this;
  }

  public subtracao(n: number): this {
    this.numero -= n;
    return this;
  }

  public divisao(n: number): this {
    this.numero /= n;
    return this;
  }

  public multiplicacao(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).subtracao(5).divisao(2).multiplicacao(2).pow(2);
console.log(calculadora);

console.log();

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  public setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('http://www.google.com').setMethod('post').send();
