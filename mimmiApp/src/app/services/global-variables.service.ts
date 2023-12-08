import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  bookGenres = ["Fantasy", "Horror", "Thriller", "Azione"]


  
  constructor() { }
}
