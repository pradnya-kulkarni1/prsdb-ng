import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserLogin } from 'src/app/model/user-login';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = 'User-login';
  userLogin: UserLogin = new UserLogin();
  message?: string = undefined;

  constructor(
    private userSvc: UserService,
    private systemSvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.systemSvc.loggedInUser = new User();
    this.userLogin.username = "Pradnyavk1";
    this.userLogin.password = "topsecret";
  }

  login(){
    this.userSvc.login(this.userLogin).subscribe({
      next:(resp) => {
        this.systemSvc.loggedInUser = resp;
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.message = 'Invalid username / password combination. Try again';
      },
      complete:() => {},
    });
  }

}
