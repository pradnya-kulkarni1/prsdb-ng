import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailsComponent } from './feature/user/user-details/user-details.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailsComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './feature/product/product-details/product-details.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { ReviewComponent } from './feature/review/review/review.component';
import { LineitemsComponent } from './feature/lineitems/lineitems/lineitems.component';
import { LineitemsCreateComponent } from './feature/lineitems/lineitems-create/lineitems-create.component';
import { LineitemsEditComponent } from './feature/lineitems/lineitems/lineitems-edit/lineitems-edit.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:UserListComponent},
  { path: 'user/list', component:UserListComponent},
  { path: 'user/create', component:UserCreateComponent},
  { path: 'user/details/:id', component:UserDetailsComponent},
  { path: 'user/edit/:id', component:UserEditComponent},
  { path: 'vendor/list', component:VendorListComponent},
  { path: 'vendor/create', component:VendorCreateComponent},
  { path: 'vendor/edit/:id', component:VendorEditComponent},
  { path: 'vendor/detail/:id', component:VendorDetailsComponent},
  { path: 'product/list', component:ProductListComponent},
  { path: 'product/create', component:ProductCreateComponent},
  { path: 'product/edit/:id', component:ProductEditComponent},
  { path: 'product/detail/:id', component:ProductDetailsComponent},
  { path: 'request/list', component:RequestListComponent},
  { path: 'request/create', component:RequestCreateComponent},
  { path: 'request/edit/:id', component:RequestEditComponent},
  { path: 'request/detail/:id', component:RequestDetailComponent},
  { path: 'lineitems/:id', component:LineitemsComponent},
  { path: 'lineitems/create/:id', component:LineitemsCreateComponent},
  { path: 'lineitems/edit/:id', component:LineitemsEditComponent},
  { path: 'review/:id', component:ReviewComponent},
  { path: 'lineitems/:id', component:LineitemsComponent},
  { path: 'lineitems/:id', component:LineitemsComponent},
  { path: 'request/approve/:id', component:RequestApproveComponent},
  { path: 'request/list', component:RequestListComponent}, 
  { path: 'user/login', component:UserLoginComponent},
  {path:'**',component:UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
