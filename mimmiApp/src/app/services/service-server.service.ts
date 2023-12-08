import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerBook } from '../DTO/ServerBook';
import { GlobalVariablesService } from './global-variables.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceServerService {

  //serverHost = "https://munchkin.free.beeceptor.com"
  serverHost = "http://localhost:3000"

  constructor(private Http: HttpClient, public global: GlobalVariablesService) { }


   sendNewBook(formData: any) {
     return this.Http.post<ServerBook[]>(this.serverHost + "/newBook", formData).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    )
    .subscribe(response => {
      // Handle the response
    });
   }
}
