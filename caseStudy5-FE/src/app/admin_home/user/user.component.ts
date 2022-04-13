import { Component, OnInit } from '@angular/core';
import {UserService} from "../../authentication/user/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['index', 'name', 'email', 'phone','handle'];
  dataSource: any

  users: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data =>{
      this.users= data
      this.dataSource= new MatTableDataSource<User>(this.users)
    })
  }



}
