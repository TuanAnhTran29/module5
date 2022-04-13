import {User} from "./user";
import {Cart} from "./cart";
import {Product} from "./product";

export class Bill{
  id: any
  user: any
  date: Date
  products: any
  totalCost: any
  status: any


  constructor(userId: any, date: Date, products: any, totalCost: any, status: any) {
    this.user = {id: userId};
    this.date = date;
    this.products = products;
    this.totalCost = totalCost;
    this.status= status
  }


  get _status(): any {
    return this.status;
  }

  set _status(value: any) {
    this.status = value;
  }
}
