import { makeAutoObservable } from "mobx";

import { http } from "../configs";
import autoSave from "../helpers/autoSave";
import { IProduct, Product } from "../models";

class ProductStore {
  products: Product[];

  currentProduct: Product;

  constructor() {
    makeAutoObservable(this);
    this.products = [];
    autoSave(this, "products");
    this.products = this.products.map((product: IProduct) => new Product(product));
  }

  getProducts = async () => {
    const response = await http.get("/api/products");
    this.products = response.data.map((product: IProduct) => new Product(product));
  };

  setCurrentProduct = (id: number) => {
    this.currentProduct = this.products.find((product) => product.id === id)!;
  };
}

export default ProductStore;
