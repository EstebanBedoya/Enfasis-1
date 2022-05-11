import User from "./User";
import Product from "./Product";
import ShoppingCart from "./ShopingCart";
import Store from "./Store";
import Products from "../utils/products";

const product = new Product({
  sku: "EA1",
  name: "prooduct1",
  price: 300,
  stock: 20,
});
const shoppingCart = new ShoppingCart();
const user = new User({ username: "Esteban" }, shoppingCart);
const store = new Store(Products, user, shoppingCart);

export const main = () => {
  user.addProductToShoppingCart(product, 5);
  console.log(store);
};
