import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Turnover} from "../model/turnover";

const API_URL= `${environment.apiUrl7}`

@Injectable({
  providedIn: 'root'
})
export class TurnoverService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Turnover[]>{
    return this.http.get<Turnover[]>(API_URL);
  }
  save(id: any,turnover: Turnover):Observable<any>{
    return this.http.post(`${API_URL}/save/${id}`,turnover)
  }
}
