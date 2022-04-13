import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../authenticationService/auth-service.service";
import {SignInForm} from "../../model/signInForm";
import {TokenService} from "../../tokenService/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formSignIn: any;
  hide= true


  status= "Please sign in"

  error4: any= "Error -> Unauthorized"


  signInForm: any


  constructor(private authService: AuthServiceService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.formSignIn= new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  signIn() {
    this.signInForm= new SignInForm(
      this.formSignIn.username,
      this.formSignIn.password
    )
    this.authService.signIn(this.signInForm).subscribe(data => {
      if (JSON.stringify(data.message) !== JSON.stringify(this.error4)){
        this.tokenService.setToken(JSON.stringify(data))
        this.router.navigate(['']).then(() => {
          window.location.reload()
        })
      }else {
        this.status= "Username or password is wrong! Please try again!"

      }
    })
  }
}
