import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { User } from 'src/app/model/user';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = 'Request-Create';
  request: Request = new Request();
  user: User = new User();
  message?: string = undefined;
deliveryModes: string[] = ['Pickup', 'FreeDelivery','ExpressDelivery']

  constructor(private requestSvc: RequestService,private userSVC: UserService,
     private systemSvc: SystemService, private router: Router) { }

  ngOnInit(): void {
   
    this.systemSvc.checkLogin;
    if (this.systemSvc.loggedInUser.id ==0){
    this.router.navigateByUrl("/user/login");
      console.log("UserID ="+ this.systemSvc.loggedInUser.id);
  
    }
    this.request.user = this.systemSvc.loggedInUser;
  }
  save(): void {
    
    this.requestSvc.createRequest(this.request).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl('/request/list');
      },
      error: (err) => {
        console.log("Error creating request: ", err);
        this.message = "Error creating request.";
      },
      complete: () => {}
    });

  }
}

// ngOnInit(): void {
//   this.route.params.subscribe({
//     next: (parms) => {
//       this.userId = parms['id'];
//       this.userSvc.getUserById(this.userId).subscribe({
//         next: (parms) => {
//           this.user = parms;
//         },
//         error: (err) => {
//           console.log('Error getting user by id: ', err);
//         },
//         complete: () => {}
//       });
//     },
//     error: (err) => {
//       console.log('Error getting id from url: ', err);
//     },
//     complete: () => {},
//   });
// }
