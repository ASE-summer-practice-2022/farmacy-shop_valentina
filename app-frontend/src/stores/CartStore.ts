import { makeAutoObservable } from "mobx";

import { http } from "../configs";
import autoSave from "../helpers/autoSave";
import { CartItem, ICartItem } from "../models";

interface ICartItemAction {
  productId: number;
  quantity: number;
  amount: number;
}

class CartStore {
  cartItems: CartItem[];

  constructor() {
    makeAutoObservable(this);
    this.cartItems = [];
    autoSave(this, "cartItems");
    this.cartItems = this.cartItems.map((i: ICartItem) => new CartItem(i));
  }

  getCartItems = async () => {
    const response = await http.get("/api/cart-items");
    this.cartItems = response.data.map((i: ICartItem) => new CartItem(i));
  };

  createCartItem = async (item: ICartItemAction) => {
    const response = await http.post("/api/cart-items", item);
    this.cartItems.push(new CartItem(response.data));
  };

  removeCartItem = async (id: number) => {
    await http.delete(`/api/cart-items/${id}`);
    this.cartItems = this.cartItems.filter((i) => i.id !== id);
  };

  updateCartItem = async (id: number, item: ICartItemAction) => {
    const response = await http.put(`/api/cart-items/${id}`, item);
    const itemId = this.cartItems.findIndex((i) => i.id === id);
    this.cartItems[itemId] = new CartItem(response.data);
  };

  clearAll = async () => {
    this.cartItems = [];
    await http.delete("/api/cart-items");
  };
}

export default CartStore;
