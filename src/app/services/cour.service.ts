import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {
 
  private baseUrl = 'http://localhost:8080/api/test/'; 
  
  constructor(private http:HttpClient) { }  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
   getCours():Observable<any> {
     return this.http.get("http://localhost:8080/api/test/cours");
     
   }
  save(cour: object): Observable<object> {  
    return this.http.post("http://localhost:8080/api/test/save",cour);  
  }  
  
  deletecour(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }  
  
  getCourid(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}cour/${id}`);  
  }  
  
  update(id: number, formData: FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}cour/update/${id}`, formData);  
  }  
  SaveUserProfile(formData:FormData):Observable<any>{
     return this.http.post("http://localhost:8080/api/test/savecourInserver",formData);  
  }
  downloadFile(data):Observable<Blob>{
    const REQUEST_PARAMS =new HttpParams().set('fileName',data.file);
    return this.http.get('http://localhost:8080/api/test/download2/${fileName}', {
      params:REQUEST_PARAMS,
      responseType:'blob'
      
    });
  }
  download(file: string ): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${file}`, {
      responseType:'blob'
    });
  }
  
}
