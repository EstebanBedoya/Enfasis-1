interface IProduct {
  sku: string;
  name: string;
  stock: number;
  price: number;
}

export default class Product {
  sku: string;
  name: string;
  stock: number;
  price: number;

  constructor({ sku, name, stock, price }: IProduct) {
    this.sku = sku;
    this.name = name;
    this.stock = stock;
    this.price = price;
  }

  validateStock(quantity: number): boolean {
    return this.stock >= quantity;
  }
}
