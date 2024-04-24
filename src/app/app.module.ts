import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './feature/user/user-details/user-details.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailsComponent } from './feature/product/product-details/product-details.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { ReviewComponent } from './feature/review/review/review.component';
import { LineitemsComponent } from './feature/lineitems/lineitems/lineitems.component';
import { LineitemsCreateComponent } from './feature/lineitems/lineitems-create/lineitems-create.component';
import { LineitemsEditComponent } from './feature/lineitems/lineitems/lineitems-edit/lineitems-edit.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { SortPipe } from './pipe/sort.pipe';
import { BaseComponent } from './feature/base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    UserDetailsComponent,
    UserCreateComponent,
    UserEditComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorDetailsComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    UserLoginComponent,
    ReviewComponent,
    LineitemsComponent,
    LineitemsCreateComponent,
    LineitemsEditComponent,
    RequestApproveComponent,
    SortPipe,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
