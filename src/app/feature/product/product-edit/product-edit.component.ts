import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Vendor } from 'src/app/model/vendor';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product-Edit';
  product: Product = new Product();
  productId: number = 0;
  vendors: Vendor[] = [];
  message?: string = undefined;
  

  constructor(
    private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.productId = parms['id'];
        this.productSvc.getProductById(this.productId).subscribe({
          next: (parms) => {
            this.product = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Product: ', err);
      },
      complete: () => {},
    });
    this.vendorSvc.getAllVendors().subscribe({
      next: (resp) => {
        this.vendors = resp;
      },
      error: (err) => {
        console.log('Product Create - error getting Vendors.');
      },
      complete: () => {},
    });
  }

  save(): void {
    // NOTE: Check for existence of credit title before save?
    this.productSvc.updateProduct(this.product).subscribe({
      next: (resp) => {
        this.product = resp;
        this.router.navigateByUrl('/product/list');
      },
      error: (err) => {
        console.log('Error updating product: ', err);
        this.message = 'Error updating Product.';
      },
      complete: () => {},
    });
  }

  
  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }


}
