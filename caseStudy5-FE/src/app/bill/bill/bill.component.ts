import { Component, OnInit } from '@angular/core';
import {BillService} from "../../bill_service/bill.service";
import {Bill} from "../../model/bill";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../authentication/user/user.service";
import {Product} from "../../model/product";
import {CartServiceService} from "../../cartService/cart-service.service";
import {Cart} from "../../model/cart";
import {of} from "rxjs";
import {Turnover} from "../../model/turnover";
import {TurnoverService} from "../../turnover_service/turnover.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {

  bId: any
  bill: any
  total: any
  userId: any
  date= new Date()

  cart= JSON.parse(sessionStorage.getItem("Cart")!)
  products: Product[]=[]

  turnover: any

  constructor(private cartService: CartServiceService,private billService: BillService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router,
              private turnoverService: TurnoverService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.total= Number(param.get('total'))
      this.userId= Number(param.get('userId'))
      for (let i=0; i< this.cart.length; i++){
        this.products.push(this.cart[i].product)
      }

    })

  }



  paid() {
    this.bill= new Bill(
      this.userId,
      this.date,
      this.products,
      this.total,
      "paid"
    )
    this.turnover= new Turnover(
      this.total,
      this.userId
    )
    this.turnoverService.save(this.userId,this.turnover).subscribe()
    this.billService.saveBill(this.bill).subscribe()
      this.router.navigate(['']).then(() =>{
        alert("You have successfully paid! Click on the bill list to see more details")
        sessionStorage.removeItem("Cart")
        for (let c of this.cart){
          this.cartService.deleteCart(c.id).subscribe()
        }
      })

  }

  backToCart() {
    this.bill= new Bill(
      this.userId,
      this.date,
      this.products,
      this.total,
      "unpaid"
    )

    this.billService.saveBill(this.bill).subscribe()
      this.router.navigate(['/bill-user',this.userId]).then(() =>{
        window.location.reload()
      })
      sessionStorage.removeItem("Cart")
      for (let c of this.cart){
        this.cartService.deleteCart(c.id).subscribe()
      }

  }
}
