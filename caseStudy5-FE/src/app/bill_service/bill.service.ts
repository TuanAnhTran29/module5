import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../model/bill";
import {A} from "@angular/cdk/keycodes";
const API_URL= `${environment.apiUrl6}`

@Injectable({
  providedIn: 'root'
})
export class BillService {


  constructor(private http: HttpClient) { }


  saveBill(bill: Bill): Observable<any>{
    return this.http.post(API_URL,bill)
  }

  findAllByUserId(id: any): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/user/${id}`)
  }

  getAllBill(): Observable<Bill[]>{
    return this.http.get<Bill[]>(API_URL)
  }

  getBillById(id: any): Observable<any>{
    return this.http.get(`${API_URL}/${id}`)
  }

  saveBillUnpaid(bill: Bill): Observable<any>{
    return  this.http.post(API_URL + '/' + 'unpaid',bill)
  }

  payBill(bill: Bill): Observable<any>{
    return this.http.post(API_URL + '/' + 'pay',bill)
  }

  deleteBill(id: any):Observable<any>{
    return this.http.delete(`${API_URL}/delete/${id}`)
  }
}
