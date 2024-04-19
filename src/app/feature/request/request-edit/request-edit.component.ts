import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title: string = 'Request-Edit';
  request: Request = new Request();
  requestId: number = 0;
  user: User = new User(); 
  message?: string = undefined;

  constructor(
    private requestSvc: RequestService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.requestId = parms['id'];
        this.requestSvc.getRequestById(this.requestId).subscribe({
          next: (parms) => {
            this.request = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Request: ', err);
      },
      complete: () => {},
    });
  }

  save(): void {
    // NOTE: Check for existence of request title before save?
    this.requestSvc.updateRequest(this.request).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl('/request/list');
      },
      error: (err) => {
        console.log('Error updating request: ', err);
        this.message = 'Error updating Request.';
      },
      complete: () => {},
    });
  }

  compUser(a: User, b: User): boolean {
    return a && b && a.id === b.id;
  }


}
