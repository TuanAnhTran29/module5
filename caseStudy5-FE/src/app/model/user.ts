import {Role} from "./role";

export class User{
  id: any;
  name: any;
  address: any;
  phone: any;
  username: any
  email: any;
  roles: Role[];


  constructor(id: any, name: any, address: any, phone: any, username: any, email: any, roles: Role[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.username= username;
    this.email = email;
    this.roles = roles;
  }
}
