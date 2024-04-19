import { Request } from "../model/request";
import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Lineitem } from "../model/lineitem";

const URL: string = 'http://localhost:8080/api/lineitems';

@Injectable({
    providedIn: 'root',
})
export class LineitemsService{
 
    constructor(private http: HttpClient){}

    getLinesForRequestById(id:number):Observable<Lineitem[]> {
        return this.http.get(URL + '/getlinesforrequest/'+id) as Observable<Lineitem[]>;
    }

    getAllLineitemById(id: number):Observable<Lineitem>{
        return this.http.get(URL+'/'+id) as Observable<Lineitem>;
    }
    createLineitem(lineitem: Lineitem): Observable<Lineitem> {
        return this.http.post(URL, lineitem) as Observable<Lineitem>;
      }

      updateLineitem(id: number,lineitem: Lineitem): Observable<Lineitem> {
        return this.http.put(URL+"/"+lineitem.id, lineitem) as Observable<Lineitem>;
      }
    
      deleteLineitem(id: number): Observable<boolean> {
        return this.http.delete(URL+"/"+id) as Observable<boolean>;
      }
    
}


