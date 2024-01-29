export class ShoppingCart {
  private readonly products: Array<Product> = [];

  public insertProduct(...products: Array<Product>): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  public amount(): number | string {
    return `A quantidade de produtos do carrinho: ${this.products.length} items.`;
  }

  public total(): number | string {
    let result = 0;
    for (const product of this.products) {
      result += product.price;
    }

    result = Number(result.toFixed(2));
    return `O valor dos produtos do carrinho R$ ${result}`;
  }
}

export class Product {
  constructor(
    public firstname: string,
    public price: number,
  ) {}
}

const product1 = new Product('Camiseta', 49.9);
const product2 = new Product('Bolsa', 10.5);
const product3 = new Product('Calça', 22);
const product4 = new Product('Boné', 25.7);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProduct(product1);
shoppingCart.insertProduct(product2);
shoppingCart.insertProduct(product3, product4);

console.log(shoppingCart);

console.log();

console.log(shoppingCart.amount());

console.log();
console.log(shoppingCart.total());
