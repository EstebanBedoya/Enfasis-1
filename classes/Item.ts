import Product from "./Product";

interface IItem {
  quantity: number;
  weight?: number;
}

export default class Item {
  sku: string;
  quantity: number;
  weight: number;
  subTotal: number = 0;
  private _product: Product;

  constructor({ quantity, weight = 0 }: IItem, product: Product) {
    this.sku = product.sku;
    this.quantity = quantity;
    this.weight = weight;
    this._product = product;
  }

  private typeSku(productId: string): string {
    return productId.slice(0, 2);
  }

  private calculateSPDiscount(quantity: number): number {
    let discount: number = 0;
    if (quantity >= 3 && quantity <= 6) discount += 0.2;
    if (quantity >= 6 && quantity <= 9) discount += 0.2;
    if (quantity >= 9) discount += 0.3;

    return discount;
  }

  calculateSubTotal() {
    const type = this.typeSku(this.sku);

    if (type === "WE") {
      this.subTotal = (this.weight * this._product.price) / 1000;
    }

    if (type === "SP") {
      this.subTotal =
        this.calculateSPDiscount(this.quantity) * this._product.price;
    }

    this.subTotal = this._product.price * this.quantity;
    return this.subTotal;
  }
}
