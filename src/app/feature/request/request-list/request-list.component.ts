import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {Request} from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title: string = 'Request-List';
  requests?: Request [] = undefined;
  message?: string = undefined;
  adminUser?: boolean = undefined;
  notAdmin?: boolean = undefined;
  isUser?: boolean = undefined; 

  constructor(
    private requestSvc: RequestService,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.adminUser = this.sysSvc.loggedInUser.admin;
    this.sysSvc.checkLogin();
  
    if(!this.adminUser) { 
      this.notAdmin = true;

    }
    this.requestSvc.getAllRequests().subscribe({
      next: (resp) => {
        this.requests = resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }
  }


