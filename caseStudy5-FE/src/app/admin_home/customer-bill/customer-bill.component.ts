import { Component, OnInit } from '@angular/core';
import {BillService} from "../../bill_service/bill.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Bill} from "../../model/bill";

@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.scss']
})
export class CustomerBillComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any

  id: any
  bill: any

  constructor(private billService: BillService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.billService.getAllBill().subscribe(data =>{
      this.bill= data
      this.dataSource= new MatTableDataSource<Bill>(this.bill)
    })
  }



}
