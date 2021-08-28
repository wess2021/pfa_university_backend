import { Departement } from './../departement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = 'http://localhost:8080/api/test/';
  
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
}
 
  constructor(private http: HttpClient) { }
  getDepartementList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'departements');  
  }    
  
  createDepartement(departement): Observable<Departement> {  
    let s= this.http.post<Departement>(`${this.baseUrl}`+'department',departement); 
    console.log(s);
    return s;
  }  

  deleteDepartement(deprtement_id: number): Observable<void> {  
    return this.http.delete<void>(`${this.baseUrl}departement/`+deprtement_id);  
  }  
  
  getDepartement(departement_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}departement/${departement_id}`);  
  }  
  
  updateDepartement(departement_id: number, formData: FormData): Observable<Object> {  
    return this.http.post(`${this.baseUrl}departement/update/${departement_id}`, formData);  
  }  
}
