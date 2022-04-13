import { Component, OnInit } from '@angular/core';
import {BillService} from "../../bill_service/bill.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Bill} from "../../model/bill";
import {MatTableDataSource} from "@angular/material/table";
import {Cart} from "../../model/cart";
import {Product} from "../../model/product";

@Component({
  selector: 'app-history-cart',
  templateUrl: './history-cart.component.html',
  styleUrls: ['./history-cart.component.scss']
})
export class HistoryCartComponent implements OnInit {

  id: any
  bill: any
  total: any

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any

  constructor(private billService: BillService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.id= Number(param.get('id'))
      this.total= Number(param.get('total'))
      this.billService.getBillById(this.id).subscribe(data =>{
        this.bill= data
        this.dataSource= new MatTableDataSource<Product>(this.bill.products)
      })
    })
  }

}
