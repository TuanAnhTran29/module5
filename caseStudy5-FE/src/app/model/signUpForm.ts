export class SignUpForm{
  name: string;
  username:string;
  password: string;
  email:string;
  address: string;
  phone: string;
  roles: string[]


  constructor(name: string , address: string , phone: string, username: string , email: string, password: string) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['USER'];
  }


}
