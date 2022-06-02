import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Book} from "../model/book";
const API_URL=`${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  create( data: any): Observable<Book>{
    return this.http.post<Book>(`${API_URL}/books`, data);
  }

  update(id: number, data: any): Observable<Book>{
    return this.http.put(`${API_URL}/books/${id}`, data);
  }

  findById(id: number): Observable<Book>{
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  deleteById(id: number): Observable<Book>{
    return this.http.delete<Book>(`${API_URL}/books/${id}`)
  }
}






