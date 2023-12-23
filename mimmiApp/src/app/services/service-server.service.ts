import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerBook } from '../DTO/ServerBook';
import { GlobalVariablesService } from './global-variables.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Email } from '../DTO/Email';
import { User } from '../DTO/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceServerService {

  //serverHost = "https://munchkin.free.beeceptor.com"
  //serverHost = "http://localhost:3001"
  serverHost = "https://mimmiserver.onrender.com"

  constructor(private Http: HttpClient, public global: GlobalVariablesService) { }


   sendNewBook(formData: any) {
     return this.Http.post<ServerBook[]>(this.serverHost + "/newBook", formData).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
   }
   getBooks(filterName?: string, formGroup?:any) {
    if (filterName) {
      console.log("non ancora")
      return this.Http.post<ServerBook[]>(this.serverHost + "/getBooks?filterName=" + filterName, formGroup)
    } else {
      return this.Http.post<ServerBook[]>(this.serverHost + "/getBooks", formGroup)
    }
  }

  sendEmail(formData: any) {
    return this.Http.post(this.serverHost + "/sendEmail", formData);
  }

  getUser(formData: any) {
    return this.Http.post<User[]>(this.serverHost + "/getUser", formData);
  }

  deleteBook(id:string) {
    console.log(id);
    return this.Http.delete(this.serverHost + "/deleteBook?idBook=" + id).subscribe()
  }
}
