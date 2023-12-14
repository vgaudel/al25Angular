import { Injectable } from '@angular/core';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {

  public tabUser : User[] = [];

  constructor() { 
    //this.tabUser = JSON.parse(""+localStorage.getItem("tabUser"));
  }

  public addUser(user : User) {
    this.tabUser.push(user);
    console.log(JSON.stringify(this.tabUser));
    //localStorage.setItem(JSON.stringify(this.tabUser),"tabUser");
  }
}
