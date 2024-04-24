import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lineitem } from 'src/app/model/lineitem';
import { LineitemsService } from 'src/app/service/lineitems.service';
import { SystemService } from 'src/app/service/system.service';
import{ProductService} from 'src/app/service/product.service';
import{RequestService} from 'src/app/service/request.service';
import {Request} from 'src/app/model/request';
import {Product} from 'src/app/model/product';


@Component({
  selector: 'app-lineitems-edit',
  templateUrl: './lineitems-edit.component.html',
  styleUrls: ['./lineitems-edit.component.css']
})
export class LineitemsEditComponent implements OnInit {
  title: string = 'Lineitem-Edit';
  lineitem: Lineitem = new Lineitem();
  lineitemId: number = 0;
  requestId: number = 0;
  request: Request = new Request();
  products: Product[] = [];
  message?: string = undefined;
 


  constructor(
    private lineitemSvc: LineitemsService,
    private sysSvc : SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private reqSvc: RequestService,
    private productSvc: ProductService
  ) { }

  ngOnInit(): void {
     
    this.productSvc.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: (err) => {
        console.log('Lineitems Create - error getting lineitems.');
      },
      complete: () => {},
    });
    this.route.params.subscribe({
      next: (parms) => {
        this.lineitemId = parms['id'];
        console.log("lineitemId "+this.lineitemId);
        this.lineitemSvc.getAllLineitemById(this.lineitemId).subscribe({
          next: (parms) => {
            this.lineitem = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Lineitem: '+ err);
      },
      complete: () => {}
    });
  }
  save(): void {
   
    this.lineitemSvc.updateLineitem(this.lineitemId, this.lineitem).subscribe({
      next: (resp) => {
        this.lineitem = resp;
        
        console.log("RequestId for lineItem= "+this.lineitem.request.id);
        this.router.navigateByUrl('/lineitems/'+this.lineitem.request.id);
      },
      error: (err) => {
        console.log('Error updating lineitem: '+ err.message);
      },
      complete: () => {},
    });
  }
  
}
