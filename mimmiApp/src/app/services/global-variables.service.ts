import { Injectable } from '@angular/core';
import { User } from '../DTO/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  bookGenres = ["Antropologia", "Autobiografia", "Classici", "Crescita Personale", "Fantascienza", "Fantasy", "Fotografia-arte", "Giallo","Horror", "Letteratura", "Manuale", "Narrativa contemporanea", "New Age", "Poesie", "Psicologia", "Racconti", "Romanzo", "Romanzi Rosa", "Saggi", "Saggio storico", "Saggio storia Politica", "Sociologia", "Spiritualità", "Sport", "Storico", "Thriller"]
  goodCondiction = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]

  userInfos: User[] = [/*{
    "nickname": "Admin",
    "password": "Admin",
    "role": "Admin"
  }*/]
  
  constructor() { }

  setUserInfos(userInfos: User[]){
    this.userInfos = userInfos
  }

  getUserInfos(){
    return this.userInfos
  }
}
