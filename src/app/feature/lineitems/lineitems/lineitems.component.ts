import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lineitem } from 'src/app/model/lineitem';
import {Request} from 'src/app/model/request';
import {LineitemsService} from 'src/app/service/lineitems.service'
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})
export class LineitemsComponent implements OnInit {
  title: string = "Purchase Request Lines For Request";
  lineitems: Lineitem[] = [];
  message?: string = undefined;
  request: Request = new Request();
  requestId: number = 0;
  lineitem: Lineitem= new Lineitem;
  requestIdOfLineitemDelete: number = 0;
  adminUser? :boolean = undefined;
  notAdmin?: boolean = undefined;
 

  constructor(
    private lineitemSvc : LineitemsService,
    private reqSvc: RequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    this.adminUser = this.sysSvc.loggedInUser.admin;
       
    this.route.params.subscribe({
      next: (parms) => {
        this.requestId = parms['id'];
        this.reqSvc.getRequestById(this.requestId).subscribe({
          next: (parms) => {
            this.request = parms;
            if (this.sysSvc.loggedInUser.id == this.request.user.id)
              {
                if (!this.adminUser)
                this.notAdmin = true;
              }
          },
        });
        this.lineitemSvc.getLinesForRequestById(this.requestId).subscribe({
          next:(resp) => {
            this.lineitems=resp;
            this.router.navigateByUrl('/lineitems/'+this.requestId);
     },
          error: (err) => {  
            console.log('Error finding lines for requests: ', err);
            this.message = 'Error creating lines';
          },
          complete: () => {
          },
        });
      },
      error: (err) => {
        console.log("d");
        console.log('Error getting Request: ', err);
      },
      complete: () => {
        
      }
      
    });

  }
  submit(): void{
    console.log("RequestId for review ="+ this.request.id)
    this.reqSvc.submitRequestForReview(this.request.id).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl("/request/list");
      },
      error:(err) => {
        console.log('Requesuest for Review - error getting request');
      },
      complete:() => {},
    });
  }
  delete(lineItemId: number) {
   
    this.lineitemSvc.deleteLineitem(lineItemId).subscribe({
      next: (resp) => {
        console.log("RequestId after delete = "+this.request.id);
        // get the request by requestId
        // get all line items for request
        
            this.reqSvc.getRequestById(this.request.id).subscribe({
              next: (parms) => {
                this.request = parms;
              },
            });
            this.lineitemSvc.getLinesForRequestById(this.request.id).subscribe({
              next:(resp) => {
                this.lineitems=resp;
                this.router.navigateByUrl('/lineitems/'+this.requestId);
                  },
              error: (err) => {  
                console.log('Error finding lines for requests: ', err);
                this.message = 'Error creating lines';
                  },
              complete: () => {
               
                },
              });
         
            },
      error: (err) => {
        console.log(
          'LineitemsComponent - Error deleting lineitem: ' + err.message
        );
        this.message =
          'LineitemsComponent - error deleting lineitem: ' + err.message;
      },
      complete: () => {},
    });
  }
}
