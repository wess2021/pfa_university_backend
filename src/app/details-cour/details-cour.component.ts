import { NgForm } from '@angular/forms';
import { CommentService } from './../services/comment.service';
import { Cour } from './../cour';
import { TokenStorageService } from './../auth/token-storage.service';
import { CourService } from './../services/cour.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-details-cour',
  templateUrl: './details-cour.component.html',
  styleUrls: ['./details-cour.component.css']
})
export class DetailsCourComponent implements OnInit {
  id:number; cour:any;
  file:any;
  commentaire:any;
  info: any;
  cour_id:number;
  constructor(private activedRoute:ActivatedRoute,public courService:CourService,private commentService:CommentService,private router:Router,private token: TokenStorageService) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.courService.getCourid(this.id).subscribe(data=>{
  console.log(data)
  this.cour=data;
 
},error=>console.log(error));}
  }
  download3(file:File){
    this.router.navigate(['/download-cour', file]);
  }

  onsubmit(f:NgForm) { 
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      roles: this.token.getAuthorities()
    };
      console.log(this.info.username)
 this.commentaire=f.value;
console.log(f.value);
const formData=new FormData();
formData.append('comment',JSON.stringify(this.commentaire));
formData.append('email',this.info.username);

  console.log(this.commentaire);
  this.cour_id=+this.activedRoute.snapshot.paramMap.get('id');
  console.log(this.cour_id);
  
  this.commentService.saveComment(formData,this.cour_id).subscribe(data => (console.log(data),window.location.reload()));  
  
  } 

}