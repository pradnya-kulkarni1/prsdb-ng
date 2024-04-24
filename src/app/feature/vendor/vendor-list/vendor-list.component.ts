import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/service/vendor.service';
import{ SystemService} from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  title: string = 'Vendor-List';
  vendors?: Vendor[] = undefined;
  adminUser?: boolean = undefined;

  constructor(private vendorSvc: VendorService,
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.adminUser = this.sysSvc.loggedInUser.admin;
    this.sysSvc.checkLogin();
    this.vendorSvc.getAllVendors().subscribe({
      next: (resp) => {
        this.vendors = resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }
  }


