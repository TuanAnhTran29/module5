import { Component, OnInit } from '@angular/core';
import {UserService} from "../../authentication/user/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {TokenService} from "../../tokenService/token.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  userForm: any;
  id: any;

  error4= {
    message: "Your phone is existed! Please try again!"
  }

  error5= {
    message: "Your email is existed! Please try again!"
  }

  error6= {
    message: "Your email and phone number are existed! Please try again!"
  }

  error7= {
    message: "Updated user successfully!"
  }

  status= 'Update the form below'

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router,public tokenService: TokenService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      this.id= Number(param.get('id'))
      this.getUser(this.id);
    })
  }

  getUser(id: any){
    this.userService.getUserById(id).subscribe(user => {
      this.userForm= new FormGroup({
        name: new FormControl(user.name,[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
        email: new FormControl(user.email,[Validators.required, Validators.email]),
        phone: new FormControl(user.phone,[Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)]),
        address: new FormControl(user.address,[Validators.required, Validators.minLength(5),Validators.maxLength(100)])
      })
    })
  }

  submitUpdate(id: any){
    const user= this.userForm.value
    this.userService.updateUserById(user,id).subscribe(user => {
      if (JSON.stringify(user) == JSON.stringify(this.error4)){
        this.status= "Your phone is existed! Please try another phone number!"
      }
      if (JSON.stringify(user) == JSON.stringify(this.error5)){
        this.status= "Your email is existed! Please try another email!"
      }
      if (JSON.stringify(user) == JSON.stringify(this.error6)){
        this.status= "Your email and phone number are existed! Please try again!"
      }
      if (JSON.stringify(user) == JSON.stringify(this.error7)){
        this.status= "Updated user successfully!"
      }

    }, e =>{
      console.log(e)
    })
  }

}
