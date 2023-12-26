import { Injectable } from '@angular/core';
import { User } from '../DTO/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  bookGenres = ["Thriller", "Fantasy", "Fantascienza", "Narrativa contemporanea", "Romanzi Rosa", "Classici", "Saggi", "Crescita Personale", "Psicologia"]
  goodCondiction = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]

  userInfos: User[] = [{
    "nickname": "Admin",
    "password": "Admin",
    "role": "Admin"
  }]
  
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
