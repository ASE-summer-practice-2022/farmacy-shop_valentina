import Product, { IProduct } from "./Product";

export interface ICartItem {
  id: number;
  quantity: number;
  amount: number;
  productId: number;
  product: IProduct;
}

class CartItem implements ICartItem {
  id: number;

  amount: number;

  quantity: number;

  productId: number;

  product: IProduct;

  constructor(obj: ICartItem) {
    this.id = obj.id;
    this.amount = obj.amount;
    this.quantity = obj.quantity;
    this.productId = obj.productId;
    this.product = new Product(obj.product);
  }
}

export default CartItem;
