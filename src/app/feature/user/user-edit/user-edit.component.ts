import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string = 'User-Edit';
  user: User = new User();
  userId: number = 0;
  message?: string = undefined;

  constructor(
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.userId = parms['id'];
        this.userSvc.getUserById(this.userId).subscribe({
          next: (parms) => {
            this.user = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error editing Movie: ', err);
      },
      complete: () => {}
    });
  }

  save(): void {
    // NOTE: Check for existence of movie title before save?
    this.userSvc.updateUser(this.user).subscribe({
      next: (resp) => {
        this.user = resp;
        this.router.navigateByUrl('/user/list');
      },
      error: (err) => {
        console.log('Error updating movie: ', err);
        this.message = 'Error updating Movie.';
      },
      complete: () => {},
    });
  }

}
