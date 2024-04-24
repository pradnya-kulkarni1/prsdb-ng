import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import{ SystemService} from 'src/app/service/system.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string = "User-List";
  users?:User[] = undefined;
  adminUser? : boolean = undefined;

  constructor(private userSvc: UserService,
    private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.adminUser = this.sysSvc.loggedInUser.admin;

    this.sysSvc.checkLogin();

    this.userSvc.getAllUsers().subscribe({
      next:(resp)=> {
        this.users = resp;
      },
      error:(err) => {
        console.log(err);
      },
      complete:() => {}
    });
  }

}
