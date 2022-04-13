import { Component, OnInit } from '@angular/core';
import {BillService} from "../../bill_service/bill.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Bill} from "../../model/bill";
import {MatTableDataSource} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {TurnoverService} from "../../turnover_service/turnover.service";
import {Turnover} from "../../model/turnover";

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.scss'],
  providers: [DatePipe]
})
export class UserBillComponent implements OnInit {

  userId: any
  bill: Bill[]= []
  billById: any

  user= JSON.parse(sessionStorage.getItem("Token_key")!).roles[0].authority

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','handle','view_cart','delete'];
  dataSource: any

  turnover: any

  constructor(private billService: BillService, private activatedRoute: ActivatedRoute, private router: Router, private datePipe: DatePipe,
              private turnoverService: TurnoverService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.userId= Number(param.get('userId'))
      this.getBillsByUserId(this.userId)

    })
  }

  getBillsByUserId(id: any){
    return this.billService.findAllByUserId(id).subscribe(data =>{
      this.bill= data
      this.dataSource= new MatTableDataSource<Bill>(this.bill)
    })
  }

  pay(id: any) {
    this.billService.getBillById(id).subscribe(data =>{
      this.billById= data
      this.billService.payBill(this.billById).subscribe(() =>{
        this.router.navigate(['/bill-user', this.userId]).then(() =>{
          this.turnover= new Turnover(
            this.billById.total,
            this.userId
          )
          this.turnoverService.save(this.userId,this.turnover).subscribe()
          alert("Payment success!")
          window.location.reload()
        })
      })
    })
  }

  deleteBill(id: any) {
    this.billService.deleteBill(id).subscribe(() =>{
      window.location.reload()
      this.router.navigate(['/bill-user', this.userId])
    })
  }
}
