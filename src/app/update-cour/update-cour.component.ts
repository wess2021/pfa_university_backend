import { Cour } from './../cour';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from '../services/cour.service';

@Component({
  selector: 'app-update-cour',
  templateUrl: './update-cour.component.html',
  styleUrls: ['./update-cour.component.css']
})
export class UpdateCourComponent implements OnInit {
  id:number;
  cour:any;

  userfile:any;
 
  
    constructor(private router:Router,private route:ActivatedRoute,private courser:CourService) { }
  
    ngOnInit() {
      
    
      this.id=this.route.snapshot.params['id'];
      this.courser.getCourid(this.id).subscribe(data=>{
        console.log(data)
        this.cour=data;
      
      });
    }
  
  onsubmit(f:NgForm){
    let user:Cour=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('title',user.title);
      formData.append('content',user.content);
      formData.append('file',this.userfile);
    this.courser.update(this.id,formData).subscribe(data=>{
      this.cour=data;
      console.log(this.cour);
      this.router.navigate(['list-cour'])
  });}
  onSelectFile(event){
    const file=event.target.files[0];
    console.log(file);
    this.userfile=file;
    
  }
  
  }
  