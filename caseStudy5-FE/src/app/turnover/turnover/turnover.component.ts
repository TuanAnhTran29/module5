import { Component, OnInit } from '@angular/core';
import {TurnoverService} from "../../turnover_service/turnover.service";
import {Turnover} from "../../model/turnover";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.scss']
})
export class TurnoverComponent implements OnInit {

  turnover: Turnover[]= []


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any

  total=0

  constructor(private turnoverService: TurnoverService) { }

  ngOnInit(): void {
    this.turnoverService.getAll().subscribe(data=>{
      this.turnover= data
      this.dataSource= new MatTableDataSource<Turnover>(this.turnover)
      this.turnover.forEach((item: any) =>{
        this.total+= item.revenue
      })
    })

  }

}
