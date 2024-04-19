import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import {Request} from 'src/app/model/request';
import { LineitemsService } from 'src/app/service/lineitems.service';
import { Lineitem } from 'src/app/model/lineitem';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title: string = 'Purchase Request- Approve/Reject';
  request: Request  = new Request();
  message?: string = undefined;
  requestId: number = 0;
  lineitems: Lineitem[] = [];
  reason?: string = undefined;

  constructor(
    private requestSvc: RequestService,
    private prodSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private lineitemSvc: LineitemsService

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

    console.log("request id, again, ="+this.requestId);
    this.lineitemSvc.getLinesForRequestById(this.requestId).subscribe({
      next:(resp) => {
        this.lineitems=resp;
        
 },
      error: (err) => {  
        console.log('Error finding lines for requests: ', err);
        this.message = 'Error creating lines';
      },
      complete: () => {
        console.log("c");
      },
    });
  }
  approve(): void {
     
    this.requestSvc.approveRequest(this.request.id).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl('/request/list');
      },
      error: (err) => {
        console.log("Error creating request: ", err);
        this.message = "Error creating request.";
      },
      complete: () => {}
    });


  }

  reject(): void{
    console.log("Request to reject Id"+this.requestId);
    this.reason = this.request.reasonForRejection;
    this.requestSvc.rejectRequest(this.request.id, this.reason).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl('/request/list');
      },
      error: (err) => {
        console.log("Error creating request: ", err);
        this.message = "Error creating request.";
      },
      complete: () => {}
    });

  }

}
