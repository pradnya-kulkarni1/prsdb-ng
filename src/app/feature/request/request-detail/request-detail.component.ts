
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  title: string = 'Request Detail';
  request: Request = new Request();
  requestId: number = 0;
  message?: string = undefined;
  adminUser?: boolean = undefined;
  isNEW?: boolean = undefined;

  constructor(
    private requestSvc: RequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    // get the id from the url
    this.route.params.subscribe({
      next: (parms) => {
        this.requestId = parms['id'];
        this.requestSvc.getRequestById(this.requestId).subscribe({
          next: (parms) => {
            this.request = parms;
            if(this.request.status == "NEW")
              {
                this.isNEW = true;
              }
          },
        });
      },
      error: (err) => {
        console.log('Error editing Request: ', err);
      },
      complete: () => {},
    });
  }

  delete() {
    this.requestSvc.deleteRequest(this.requestId).subscribe({
      next: (resp) => {
        if (resp == false) {
          console.log('RequestDetailComponent - error deleting request.');
          this.message = 'RequestDetailComponent - error deleting request.';
        } else {
          this.router.navigateByUrl('request/list');
        }
      },
      error: (err) => {
        console.log('Error deleting request: ' + err.message);
      },
      complete: () => {},
    });
  }
}

