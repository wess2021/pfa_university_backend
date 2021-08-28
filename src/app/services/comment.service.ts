import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public baseUrl = 'http://localhost:8080/api/test/'; 
  
  constructor(private http:HttpClient) { }  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
}
   getComments(cour_id:number):Observable<any> {
     return this.http.get("http://localhost:8080/api/test/courss/"+{cour_id});
     
   }

  saveComment(formData: FormData,cour_id:number): Observable<any> {  
    console.log(cour_id);
    return this.http.post("http://localhost:8080/api/test/coursss/"+cour_id,formData);  
  }  

}
