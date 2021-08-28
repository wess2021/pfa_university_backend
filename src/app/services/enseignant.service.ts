import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private baseUrl = 'http://localhost:8080/api/test/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  }
  constructor(private http: HttpClient) { }
  getEnseignantList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'enseignants');  
  }    
  
  
 SaveEnseignant(formData:FormData):Observable<any>{
  return this.http.post("http://localhost:8080/api/test/ens/ad/",formData);  
}
  deleteEnseignant(enseignant_id: number): Observable<void> {  
    return this.http.delete<void>(`${this.baseUrl}enseignant/`+enseignant_id);  
  }  
  
  getEnseignant(enseignant_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}enseignant/${enseignant_id}`);  
  }  
  
  updateEnseignant(enseignant_id: number, formData:FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}enseignant/update/${enseignant_id}`, formData);  
  }  

}