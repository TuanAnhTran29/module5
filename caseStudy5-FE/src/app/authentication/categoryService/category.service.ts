import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {HttpClient} from "@angular/common/http";
const API_URL= `${environment.apiUrl3}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiGetAllCategory= API_URL

  constructor(private http: HttpClient) { }


  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiGetAllCategory);
  }
}
