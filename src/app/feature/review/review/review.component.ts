import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { ReviewService } from 'src/app/service/review.service';
import { SystemService } from 'src/app/service/system.service';
import { Router, ActivatedRoute} from '@angular/router';
import {Request} from 'src/app/model/request';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  title: string = 'Review';
  requests: Request[] = [];
  userId: number = 0;
  request: Request = new Request();



  constructor(
    private reqSvc: RequestService,
    private sysSvc: SystemService,
    private revSvc: ReviewService,
    router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    // getiing all the requests from review method
    //if user is a reviewer getAllRequestForReview
    if (this.sysSvc.loggedInUser.reviewer){

    this.route.params.subscribe({
      next:(parms)=> {
        this.userId = parms['id'];
        this.reqSvc.getAllRequestForReview(this.userId).subscribe({
          next:(parms) => {
            this.requests = parms;
          },
        });
      },
      error: (err) => {
        console.log('Error getting requests:', err);
      },
      complete:() => {},
    });
  }
  else {
    console.log("User is not a reviewer");
    
  }
   
  }
 
}
