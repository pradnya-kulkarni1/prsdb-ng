import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  loggedInUser: User = new User();
  userName: string = '';
  message?: string = undefined;
  sortCriteria: string = 'id';
  sortOrder: string = 'asc';
  numType : number = 0.00;
  sortNumber? : number = undefined;

  constructor(private sysSvc: SystemService,
              protected router: Router) { }

  ngOnInit(): void {
  this.loggedInUser = this.sysSvc.loggedInUser;
  this.userName = this.loggedInUser.firstname;
  }

  logMessage(inMsg: string): void{
    console.log(inMsg);
    this.message = inMsg;
  }

  userLoggedIn(): boolean{
    return this.loggedInUser.id !=0;
  }

  checkLogin(): void{
    if(!this.userLoggedIn()){
      this.router.navigateByUrl('/user/login');
    }

  }

  sortBy(column: string): void{
    if(column == this.sortCriteria){
      this.sortOrder = this.sortOrder == 'desc'? 'asc':'desc';
    }
    this.sortCriteria = column;
  }

 

}
