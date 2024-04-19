import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Vendor } from 'src/app/model/vendor';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = 'Product-Create';
  product: Product = new Product();
  vendors: Vendor[] = [];
  message?: string = undefined;

  constructor(private productSvc: ProductService,private vendorSVC: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.vendorSVC.getAllVendors().subscribe({
      next:(resp) => {
        this.vendors = resp;
      },
      error:(err)=> {
        console.log('Product - create - error getting vendors');
      },
      complete: () => {},
    });
    
  }
  save(): void {
    // NOTE: Check for existence of product title before save?
    this.productSvc.createProduct(this.product).subscribe({
      next: (resp) => {
        this.product = resp;
        this.router.navigateByUrl('/product/list');
      },
      error: (err) => {
        console.log("Error creating product: ", err);
        this.message = "Error creating Movie.";
      },
      complete: () => {}
    });

  }
}

