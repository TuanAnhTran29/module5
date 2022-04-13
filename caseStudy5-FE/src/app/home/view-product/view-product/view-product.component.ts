import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../productService/product.service";
import {Product} from "../../../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../../model/category";
import {CartServiceService} from "../../../cartService/cart-service.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  product: any
  id: any
  quantity= 1

  message= {
    message: 'Product was added to cart successfully!'
  }

  status= ''

  categories: Category[]= []

  // productId: any
  // qty: any
  // userId: any

  uid: any
  isAdmin: any


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id= Number(paramMap.get('id'))
      // this.productId= Number(paramMap.get('pid'))
      // this.qty= Number(paramMap.get('quantity'))
      // this.userId= Number(paramMap.get('uid'))
      this.getProduct(this.id)

    })
    if (JSON.parse(window.sessionStorage.getItem(`Token_key`)!).roles[0].authority == "ADMIN"){
      this.isAdmin= true
    }
  }

  getProduct(id: any){
    if (sessionStorage.getItem("Token_key") != null){
      return this.productService.getProductById(id).subscribe(product => {
        this.product= product
        for (let i=0; i< this.product.categories.length; i++){
          this.categories.push(this.product.categories[i])
        }
      })
    }else {

      this.router.navigate(["/login"])
      return null
    }
  }

  getProductPicture($event: string) {
    this.product.picture= $event
  }

  i=1;

  minus() {
    if (this.i != 1){
      this.i--
      this.quantity= this.i
    }

  }

  plus(id: any) {
    this.productService.getProductById(id).subscribe(data => {
      if (this.quantity < data.inventory){
        this.i++
        this.quantity= this.i
      }
    })
  }

  addToCart(pid: any, quantity: any, uid: any) {
    this.uid= Number(JSON.parse(sessionStorage.getItem('Token_key')!).id)
      this.cartService.addToCart(pid,quantity,uid).subscribe((data) => {
        if (JSON.stringify(data) == JSON.stringify(this.message)){
          this.status= quantity + ' item(s) has been added to cart'
        }
      }, e =>{
        console.log(e)
      })
  }
}
