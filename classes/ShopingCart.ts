import Item from "./Item";

export default class ShoppingCart {
  private _itemList: Item[] = [];

  addProduct(item: Item): void {
    this._itemList.push(item);
  }

  removeProduct(productId: string): void {
    this._itemList = this._itemList.filter(({ sku }) => sku !== productId);
  }

  calculateTotal(): number {
    return this._itemList.reduce(
      (prev, curr) => curr.calculateSubTotal() + prev,
      0
    );
  }
}
