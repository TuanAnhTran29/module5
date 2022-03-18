import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  FormGroup, ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm= new FormGroup({});


  constructor() { }

  confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password= control.get('password')
    const confirmPassword= control.get('confirmPass')
    return password?.value == confirmPassword?.value ? null: {unmatched: true}

  }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.minLength(6),Validators.required]),
      confirmPass: new FormControl('',[Validators.minLength(6),Validators.required]),
      country: new FormControl('',Validators.required),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      gender: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)])
    },{
      validators: this.confirmPassword
    });
  }

  submit() {
    console.log("register")
  }
}
