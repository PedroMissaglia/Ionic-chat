import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserName: string;
  currentUserProfilePic: string;

  constructor() { }

  setUserName(content){
    this.currentUserName = content;
  }

  setUserProfileImage(content){
    this.currentUserProfilePic = content;
  }

  getUserName(){
    return this.currentUserName;
  }

  getUserProfilePic(){
    return this.currentUserProfilePic;
  }

}
