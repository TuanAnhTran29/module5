export class Turnover{
  id: any;
  revenue: any;
  user: any;


  constructor(revenue: any, user: any) {
    this.revenue = revenue;
    this.user = {id: user};
  }
}
