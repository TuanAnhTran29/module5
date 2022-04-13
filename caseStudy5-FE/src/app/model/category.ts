export class Category{
  public id?: any
  public name?: any


  constructor(id: any, name: any) {
    this.id= id
    this.name= name
  }


  get _id(): any {
    return this.id;
  }

  set _id(value: any) {
    this.id = value;
  }

  get _name(): any {
    return this.name;
  }

  set _name(value: any) {
    this.name = value;
  }
}
