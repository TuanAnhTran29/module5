import {User} from "./user";
import {Product} from "./product";

export class Cart{
  id: any;
  quantity: any;
  userId: any;
  productId: any;


  constructor(id: any, quantity: any, userId: any, productId: any) {
    this.id = id;
    this.quantity = quantity;
    this.userId= userId;
    this.productId = productId;
  }
}
