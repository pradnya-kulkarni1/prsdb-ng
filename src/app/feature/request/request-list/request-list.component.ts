import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {Request} from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title: string = 'Request-List';
  requests?: Request [] = undefined;
  message?: string = undefined;

  constructor(
    private requestSvc: RequestService
  ) { }

  ngOnInit(): void {
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


