import { Component, OnInit } from '@angular/core';
import {BillService} from "../../bill_service/bill.service";
import {MatTableDataSource} from "@angular/material/table";
import {Bill} from "../../model/bill";

@Component({
  selector: 'app-all-bill',
  templateUrl: './all-bill.component.html',
  styleUrls: ['./all-bill.component.scss']
})
export class AllBillComponent implements OnInit {

  bill: any
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.billService.getAllBill().subscribe(data =>{
      console.log(data)
      this.bill= data
      this.dataSource= new MatTableDataSource<Bill>(this.bill)
    })
  }

}
