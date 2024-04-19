import { Request } from "../model/request";
import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const URL: string = 'http://localhost:8080/api/requests';

@Injectable({
    providedIn: 'root',
})

export class RequestService{
    editRequest(request:Request){
        throw new Error('Method not implemented');
    }

    constructor(private http: HttpClient){}

    getAllRequests(): Observable<Request[]> {
        return this.http.get(URL+'/') as Observable<Request[]>;
    }

    getRequestById(id:number):Observable<Request> {
        return this.http.get(URL + '/'+id) as Observable<Request>;
    }

    createRequest( request:Request): Observable<Request>{
        return this.http.post(URL, request) as Observable<Request>;
    }

    updateRequest(request: Request):Observable<Request> {
        return this.http.put(URL + '/'+request.id,request) as Observable<Request>;
    }

    deleteRequest(id: number): Observable<boolean>{
        return this.http.delete(URL+"/"+id) as Observable<boolean>;
    }

    
    submitRequestForReview(id: number): Observable<Request>{
        return this.http.post(URL+ '/review/'+id,'') as Observable<Request>;
    }

    getAllRequestForReview(userId: number): Observable<Request[]>{
        return this.http.get(URL+'/review/'+userId) as Observable<Request[]>;
    }
    
    approveRequest(id: number): Observable<Request>{
        return this.http.post(URL+'/approve/'+id,'') as Observable<Request>;
    }

    rejectRequest(id: number, reasonForRejection:string): Observable<Request>{
        return this.http.post(URL + '/reject/' + id,  reasonForRejection) as Observable<Request>;
    }
}