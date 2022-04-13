import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/signUpForm";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {SignInForm} from "../model/signInForm";
const API_URL= `${environment.apiUrl1}`

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiSignUp= API_URL + 'signup'
  private apiSignIn= API_URL + 'signin'

  constructor(private http: HttpClient) { }


  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.http.post(this.apiSignUp,signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<any>{
    return this.http.post(this.apiSignIn,signInForm);
  }

}
