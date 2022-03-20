import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../environments/environment";
const API_URL= `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Category[]>(API_URL + '/products');
  }

  saveProduct(product: Product): Observable<Product>{
    return this.http.post(API_URL + '/products',product)
  }

  findById(id:any): Observable<Product>{
    return this.http.get<Product>(`${API_URL}/products/${id}`)
  }

  updateById(id: any, product: Product): Observable<Product>{
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProductById(id: any): Observable<Product>{
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
}
