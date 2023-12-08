import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, skipWhile, tap } from 'rxjs/operators'
import { GoogleBook } from "../DTO/GoggleBooks";

@Injectable({
  providedIn: 'root'
})
export class ServiceExternalService {

  GoogleLink: string = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  getBooks(bookName: string){
    const options = new HttpParams().set('q', bookName)
    return this.http.get<GoogleBook>(this.GoogleLink, { params: options });
  }
}
