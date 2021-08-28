import { User } from './../classes/user';
import { JwtResponse } from './../auth/jwt-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://localhost:8080/api/test/';
  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/mod';
  private adminUrl = 'http://localhost:8080/api/test/admin';
 
  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
 
  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getusersList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'usersss');  
  }  
  deleteuser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteuser/${id}`, { responseType: 'text' });
  }  
  
  getUserid(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}user/${id}`);  
  }  
  updateuser(id: number, formData: FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}user/update/${id}`, formData);  
  }  
  getUserName(username: string): Observable<Object> {  
    return this.http.get(`${this.baseUrl}user2/`+username);  
  }  
}