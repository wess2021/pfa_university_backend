import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private baseUrl = 'http://localhost:8080/api/test/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  }
  constructor(private http: HttpClient) { }
  getMatiereList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'matieres');  
  }    
  
  
 SaveMatiere(formData:FormData):Observable<any>{
  return this.http.post("http://localhost:8080/api/test/mat/ad/",formData);  
}
  deleteMatiere(matiere_id: number): Observable<void> {  
    return this.http.delete<void>(`${this.baseUrl}matiere/`+matiere_id);  
  }  
  
  getMatiere(matiere_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}matiere/${matiere_id}`);  
  }  
  
  updateMatiere(matiere_id: number, formData: FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}matiere/update/${matiere_id}`, formData);  
  }  
}

