import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private baseUrl = 'http://localhost:8080/api/test/';
  constructor(private http: HttpClient) { }
  getClasseList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'classes');  
  }  
  createClasse(formData:FormData):Observable<any>{
    return this.http.post("http://localhost:8080/api/test/classe/add",formData);  
  }
  
  
  deleteClasse(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}classe/${id}`, { responseType: 'text' });  
  }  
  
  getClasse(classe_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}classe/${classe_id}`);  
  }  
  
  updateClasse(classe_id: number, formData: FormData): Observable<Object> {  
    return this.http.post(`${this.baseUrl}classe/update/${classe_id}`, formData);  
  }  
}
