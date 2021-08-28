import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  public baseUrl = 'http://localhost:8080/api/test/'; 
  
  constructor(private http:HttpClient) { }  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
   getprofiles():Observable<any> {
     return this.http.get("http://localhost:8080/api/test/profiles");
     
   }
  
  
  deleteprofile(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteprofile/${id}`, { responseType: 'text' });
  }  
  
  getProfileid(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}getprofile/${id}`);  
  }  
  
  update(id: number, formData: FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}updateprofile/${id}`, formData);  
  }  
  SaveProfileProfile(formData:FormData):Observable<Object>{
     return this.http.post("http://localhost:8080/api/test/saveProfile",formData);  
  }
  getProfileuser_id(user_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}profiles/${user_id}`);  
  }  
  
}
