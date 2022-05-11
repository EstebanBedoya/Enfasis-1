import Product from "./Product";
import Item from "./Item";
import ShoppingCart from "./ShopingCart";

interface IUSer {
  username: string;
}

export default class User {
  username: string;
  private _shoppingCart: ShoppingCart;

  constructor({ username }: IUSer, shoppingCart: ShoppingCart) {
    this.username = username;
    this._shoppingCart = shoppingCart;
  }

  addProductToShoppingCart(product: Product, quantity: number) {
    if (!product.validateStock(quantity)) {
      console.log("No stock available");
      return;
    }

    const item = new Item({ quantity }, product);
    this._shoppingCart.addProduct(item);
  }
}
