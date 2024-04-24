import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import{ SystemService} from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  title: string = 'Product-List';
  products?: Product[] = undefined;
  adminUser?: boolean = undefined;

  constructor(private productSvc: ProductService,
      sysSvc: SystemService,
      router: Router) {  
        super(sysSvc,  router);
      }

 override ngOnInit(): void {
  super.ngOnInit();
    this.adminUser = this.loggedInUser.admin;
    this.checkLogin();
    this.productSvc.getAllProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }
  }


