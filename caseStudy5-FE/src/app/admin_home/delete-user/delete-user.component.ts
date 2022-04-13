import { Component, OnInit } from '@angular/core';
import {UserService} from "../../authentication/user/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import * as stream from "stream";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  id: any
  currentUser: any

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.id= Number(param.get('id'))
      this.getUserById(this.id)
    })
  }

  getUserById(id: any){
    return this.userService.getUserById(id).subscribe(data =>{
      this.currentUser= data
    })
  }

  deleteUser(){
    this.userService.deleteUser(this.id).subscribe()
    alert("Deleted user successfully!")
    this.router.navigate(['/allUser'])

  }

  backToUserList(){
    this.router.navigate(['/allUser'])
  }

}
