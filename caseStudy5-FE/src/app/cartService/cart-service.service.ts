import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Cart} from "../model/cart";
const API_URL= `${environment.apiUrl5}`

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItemList: any= []
  productList= new BehaviorSubject<any>([])


  constructor(private http: HttpClient) { }

  getAllCartOfUser(id: any): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${API_URL}/user/${id}`)
  }

  addToCart(pid: any, quantity: any, uid: any): Observable<any>{
    return this.http.post(`${API_URL}/add/${pid}/${quantity}/${uid}`,null);
  }

  updateQuantity(id: any, quantity: any): Observable<any>{
    return this.http.put(`${API_URL}/edit/${id}/${quantity}`,null)

  }

  deleteFromCart(id: any): Observable<any>{
    return this.http.delete(`${API_URL}/delete/${id}`)
  }

  deleteCart(id: any): Observable<any>{
    return this.http.delete(`${API_URL}/delete-cart/${id}`)
  }

}
