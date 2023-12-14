import { Component } from '@angular/core';
import { User } from '../../common/data/user';
import { LogInOutService } from '../../common/service/log-in-out.service';

@Component({
  selector: 'app-unregistered',
  templateUrl: './unregistered.component.html',
  styleUrl: './unregistered.component.scss'
})
export class UnregisteredComponent {

  constructor(private _LogInOutService : LogInOutService){

  }

  public user = new User(); //user to add or update

  public message :string ="" ;

  public onSave(){
    this.message = "user = " + JSON.stringify(this.user);
    this._LogInOutService.addUser(this.user);
  }

}
