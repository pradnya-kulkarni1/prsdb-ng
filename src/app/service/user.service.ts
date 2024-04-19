import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { UserLogin } from "../model/user-login";

const URL: string = 'http://localhost:8080/api/users';

@Injectable({
    providedIn: 'root',
})

export class UserService{
    editUser(user:User){
        throw new Error('Method not implemented');
    }

    login(userlogin: UserLogin): Observable<User>{
        return this.http.post(URL+'/login', userlogin) as Observable<User>;
        
    }
    constructor(private http: HttpClient){}

    getAllUsers(): Observable<User[]> {
        return this.http.get(URL+'/') as Observable<User[]>;
    }

    getUserById(id:number):Observable<User> {
        return this.http.get(URL + '/'+id) as Observable<User>;
    }

    createUser( user:User): Observable<User>{
        return this.http.post(URL, user) as Observable<User>;
    }

    updateUser(user: User):Observable<User> {
        return this.http.put(URL + '/'+user.id,user) as Observable<User>;
    }

    deleteUser(id: number): Observable<boolean>{
        return this.http.delete(URL+"/"+id) as Observable<boolean>;
    }



}