import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = 'Menu';
  menuItems: MenuItem[] = [];
  welcomeMsg?: string = undefined;

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {

    // we will create menu item for each menu item in our menu : user, product, vendor

   
  this.menuItems.push(new MenuItem("User","/user/list","User List"));
  this.menuItems.push(new MenuItem("Vendor","/vendor/list","Vendor List"));
  this.menuItems.push(new MenuItem("Product","/product/list","Product List"));
  this.menuItems.push(new MenuItem("Request","/request/list","Request List"));
  this.menuItems.push(new MenuItem("Review","/review/"+this.sysSvc.loggedInUser.id,"Request - Review"));


  this.sysSvc.checkLogin;
  if (this.sysSvc.loggedInUser.id ==0){
    this.menuItems.push(new MenuItem("User-Login","/user/login","User Login"));
  }
  else if(this.sysSvc.loggedInUser != undefined){
    this.welcomeMsg = "Hi, "+this.sysSvc.loggedInUser.firstname;
    this.menuItems.push(new MenuItem("Logout","/user/login","User Login"));

  }

  }

}
