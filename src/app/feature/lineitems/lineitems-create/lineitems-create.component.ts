import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lineitem } from 'src/app/model/lineitem';
import { Product } from 'src/app/model/product';
import { Request } from 'src/app/model/request';
import { LineitemsService } from 'src/app/service/lineitems.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-lineitems-create',
  templateUrl: './lineitems-create.component.html',
  styleUrls: ['./lineitems-create.component.css']
})
export class LineitemsCreateComponent {

  title: string = "Create Lineitems";
  lineitem: Lineitem = new Lineitem(0);
  message?: string = undefined;
  products: Product[] = [];
  requestId: number = 0;
  request: Request = new Request;

  constructor(
    private lineitemSvc: LineitemsService,
    private reqSvc: RequestService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    console.log('LI Create Component');
    this.route.params.subscribe({
      next: (parms) => {
        this.requestId = parms['id'];
        console.log("li create - req id = "+this.requestId);
        // get the request for the requestId
        this.reqSvc.getRequestById(this.requestId).subscribe({
          next: (resp) => {
            this.request = resp;
              // set the request in lineitem
            this.lineitem.request = this.request;
            console.log("Request name"+ this.lineitem.request.description);
          },
          error:(err) => {
            console.log('Request Create - error getting request ');
          },
          complete:() => {},
        });
      }
    });
    this.productSvc.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp;
        
      },
      error: (err) => {
        console.log('Lineitems Create - error getting lineitems.');
      },
      complete: () => {},
    });
  }


  create(): void{
    console.log("createLineItem - LI: ",this.lineitem);
    this.lineitemSvc.createLineitem(this.lineitem).subscribe({
      next: (resp) => {   
        this.lineitem = resp;
        this.router.navigateByUrl('/lineitems/'+this.requestId);
        
      },
      error: (err) => {
        console.log('Error creating lineitems: ', err);
        this.message = 'Error creating lineitems.';
      },
      complete: () => {},
    });
  
}
}

