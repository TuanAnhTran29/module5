import { Component, OnInit } from '@angular/core';
import {UserService} from "../../authentication/user/user.service";
import {TokenService} from "../../tokenService/token.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Role} from "../../model/role";
import {User} from "../../model/user";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  id: any
  user: any
  // roles= JSON.parse(this.tokenService.getToken()).roles[0].authority
  roles: any

  constructor(private userService: UserService,private tokenService:TokenService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("Token_key") != null){
      this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
        this.id= Number(param.get('id'))
        this.getUser(this.id)
      })
    }else {
      this.router.navigate(['/login'])
    }
  }

  getUser(id: any){
    this.userService.getUserById(id).subscribe(user => {
      this.user= user;
      this.roles= this.user.roles[0].name
    })

  }

}
