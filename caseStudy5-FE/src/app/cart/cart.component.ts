import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from "../cartService/cart-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Cart} from "../model/cart";
import {ProductService} from "../productService/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['index', 'product name', 'quantity', 'price','total','delete'];
  dataSource: any

  cart: any

  userId: any

  products: Product[]= []

  quantity: any
  cartId: any

  inventory: any

  status= ''

  total= 0
  totalProduct: any
  productList: Product[]= []




  constructor(private cartService: CartServiceService, private activatedRoute: ActivatedRoute, private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.userId= Number(param.get('id'))
      this.getAllCartOfUser(this.userId)

    })
  }

  private getAllCartOfUser(userId: any) {
    this.cartService.getAllCartOfUser(userId).subscribe(data => {
      this.cart= data
      this.dataSource= new MatTableDataSource<Cart>(this.cart)
      console.log(this.cart)
        this.cart.forEach((item: any) =>{
          this.total += item.quantity * item.product.price
        })
      this.totalProduct= this.cart.length

      window.sessionStorage.setItem("Cart",JSON.stringify(this.cart))
      window.sessionStorage.setItem("Quantity_product",JSON.stringify(this.cart.length))
    })
  }

  changeQuantity(id: any, $event: any, pid: any) {
    this.productService.getProductById(pid).subscribe(data => {
      if ($event > 0 && $event < data.inventory){
        this.cartService.updateQuantity(id,$event).subscribe()
        window.location.reload()
      }else {
        $event= data.inventory
      }
    })
  }

  deleteFromCart(id: any) {
    this.cartService.deleteFromCart(id).subscribe(() => {
      window.location.reload()
    })
  }

  // calculate(){
  //   this.cart.forEach((item: any) =>{
  //     this.total+= item.quantity * item.product.price
  //
  //   })
  // }

}
