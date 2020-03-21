import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8081/Userp/UserPortal';  
  
  constructor(private http:HttpClient) { }  
  getAllusers(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllusers');  
  }  
  
  saveUser(userp: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveUser', userp);  
  }  
  deleteUser(userid:Number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteUser/${userid}`);  
  }  
  
  findOneInAll1(userid: Number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll1/${userid}`);  
  }  
  findByUsernameAndPassword(username: String,password :String): Observable<User> {  
    return this.http.get<User>(this.baseUrl+'/findByUsernameAndPassword/'+username+'/'+password);  
  }  
  
  updateUser(userid: Number, value: any): Observable<any> {  
    return this.http.put(`${this.baseUrl}/updateUser/${userid}`, value);  
  }  
}

  
