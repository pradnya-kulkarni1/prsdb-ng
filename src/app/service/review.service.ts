import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const URL: string = 'http://localhost:8080/api/review';

@Injectable({
    providedIn: 'root',
})
export class ReviewService{
    constructor(private http: HttpClient)
    {}

}
