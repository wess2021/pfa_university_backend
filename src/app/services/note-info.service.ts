import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteInfoService {

  private baseUrl = 'http://localhost:8080/api/test/'; 
  
  constructor(private http:HttpClient) { }  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
   getInfos():Observable<any> {
     return this.http.get("http://localhost:8080/api/test/noteInfos");
     
   }
  
  
  deleteinfo(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteInfo/${id}`, { responseType: 'text' });
  }  
  
  getInfoid(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}info/${id}`);  
  }  
  
  update(id: number, formData: FormData): Observable<Object> {  
    return this.http.put(`${this.baseUrl}info/update/${id}`, formData);  
  }  
  SaveInfoNote(formData:FormData):Observable<any>{
     return this.http.post("http://localhost:8080/api/test/saveinfoInserver",formData);  
  }
  downloadFile(data):Observable<Blob>{
    const REQUEST_PARAMS =new HttpParams().set('fileName',data.file);
    return this.http.get('http://localhost:8080/api/test/downloademploi/${fileName}', {
      params:REQUEST_PARAMS,
      responseType:'blob'
      
    });
  }

  
}
