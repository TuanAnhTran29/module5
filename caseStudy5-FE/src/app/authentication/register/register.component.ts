import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../authenticationService/auth-service.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {SignUpForm} from "../../model/signUpForm";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any
  hide= true;

  error1: any= {
    message: "Username Existed! Please try again!"
  }

  error2: any= {
    message: "Email Existed! Please try again!"
  }

  error3: any= {
    message: "Phone Existed! Please try again!"
  }

  status= "Fill the form below"

  signUpForm?: SignUpForm

  confirmPassword: ValidatorFn= (control: AbstractControl): ValidationErrors | null => {
    const password= control.get('password')
    const confirmPassword= control.get('confirmPass')
    return password?.value == confirmPassword?.value ? null: {unmatched: true}
  }

  constructor(private authService: AuthServiceService) {

  }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      address: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(100)]),
      phone: new FormControl('',[Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)]),
      username: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(100)]),
      confirmPass: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(100)])
    }, {
      validators: this.confirmPassword
    })
  }

  submitSignUp(){
    this.signUpForm= new SignUpForm(
      this.registerForm.name,
      this.registerForm.address,
      this.registerForm.phone,
      this.registerForm.username,
      this.registerForm.email,
      this.registerForm.password
    )
    this.authService.signUp(this.signUpForm).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.error1)){
        this.status= "Username Existed! Please try again!"
      }else if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = "Email Existed! Please try again!"
      }else if (JSON.stringify(data) == JSON.stringify(this.error3)) {
        this.status = "Phone Existed! Please try again!"
      }else {
        this.status = "Created User Successfully!"
      }
    })
  }

}
