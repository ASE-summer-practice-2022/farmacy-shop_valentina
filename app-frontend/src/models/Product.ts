export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

class Product implements IProduct {
  id: number;

  name: string;

  description: string;

  price: number;

  constructor(obj: IProduct) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.price = obj.price;
  }
}

export default Product;
