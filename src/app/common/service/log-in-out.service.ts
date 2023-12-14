import { Injectable, OnInit } from '@angular/core';
import { User } from '../data/user';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService implements OnInit {

  public tabUser : User[] = [];
  private _couleurFondPreferee :string ="?";
  constructor() { 
  
  }
  ngOnInit(): void {
    
    this.tabUser = JSON.parse("Session Storage.tabUser"+sessionStorage.getItem("tabUser"));
   
  }

  public addUser(user : User) {
    this.tabUser.push(user);
    console.log(JSON.stringify(this.tabUser));
    sessionStorage.setItem(JSON.stringify(this.tabUser),"tabUser");
  }
}
  