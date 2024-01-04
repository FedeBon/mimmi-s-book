import { Injectable } from '@angular/core';
import { User } from '../DTO/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  bookGenres = ["Sport", "Thriller", "Fantasy", "Giallo", "Racconti","Fotografia-arte", "Autobiografia","Storico","New Age", "Poesie","Manuale", "Fantascienza", "Narrativa contemporanea","Romanzo", "Romanzi Rosa", "Classici","Spiritualità", "Saggi","Saggio storico", "Saggio storia Politica", "Crescita Personale", "Psicologia"]
  goodCondiction = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]

  userInfos: User[] = [/*{
    "nickname": "Admin",
    "password": "Admin",
    "role": "Admin"
  }*/]
  
  constructor() { }

  setUserInfos(userInfos: User[]){
    console.log(this.userInfos);
    
    this.userInfos = userInfos
    console.log(this.userInfos);

  }

  getUserInfos(){
    return this.userInfos
  }
}
