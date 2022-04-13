import {Category} from "./category";

export class Product{
  id:any
  name: any;
  price: any;
  picture: any;
  description: any;
  inventory: any;
  status: any;
  categories: any;


  constructor(name: any, price: any, picture: any, description: any, inventory: any,categories: any) {
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.description = description;
    this.inventory = inventory;
    this.status = "Selling";
    this.categories= [{id: categories}] ;
  }


}
