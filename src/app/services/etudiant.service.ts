import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/api/test/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  }
  constructor(private http: HttpClient) { }
  getEtudiantList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'etudiants');  
  }    
  
  
 SaveEtudiant(formData:FormData):Observable<any>{
  return this.http.post("http://localhost:8080/api/test/etu/ad/",formData);  
}
  deleteEtudiant(etudiant_id: number): Observable<void> {  
    return this.http.delete<void>(`${this.baseUrl}etudiant/`+etudiant_id);  
  }  
  
  getEtdiant(etudiant_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}etudiant/${etudiant_id}`);  
  }  
  
  updateEtudiant(etudiant_id: number, formData:FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}etudiant/update/${etudiant_id}`, formData);  
  }  
}

