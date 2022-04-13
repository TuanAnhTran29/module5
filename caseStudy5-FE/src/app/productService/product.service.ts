import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Category} from "../model/category";
const API_URL= `${environment.apiUrl2}`


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL);
  }

  getProductById(id: any): Observable<Product>{
    return this.http.get<Product>(`${API_URL}/${id}`)
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post(API_URL,product);
  }

  updateProduct(id: any,product: Product): Observable<any>{
    return this.http.put(`${API_URL}/edit/${id}`, product)
  }

  deleteProduct(id: any): Observable<any>{
    return this.http.delete(`${API_URL}/delete/${id}`)
  }

  searchProduct(name: any): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${name}`)
  }

}
