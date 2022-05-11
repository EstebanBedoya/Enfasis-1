import Product from "./Product";
import ShoppingCart from "./ShopingCart";
import User from "./User";

export default class Store {
  products: Product[];
  user: User;
  shoppingCart: ShoppingCart;

  constructor(products: Product[], user: User, shoppingCart: ShoppingCart) {
    this.products = products;
    this.user = user;
    this.shoppingCart = shoppingCart;
  }
}
