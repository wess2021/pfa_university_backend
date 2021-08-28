import { NgForm } from '@angular/forms';
import { NoteInfoService } from './../services/note-info.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteInfo } from '../classes/note-info';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  id:number;
  info:any;

  userfile:any;
 
  
    constructor(private router:Router,private route:ActivatedRoute,private infoser:NoteInfoService) { }
  
    ngOnInit() {
      
    
      this.id=this.route.snapshot.params['id'];
      this.infoser.getInfoid(this.id).subscribe(data=>{
        console.log(data)
        this.info=data;
      
      });
    }
  
  onsubmit(f:NgForm){
    let user:NoteInfo=f.value;
       console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('title',user.title);
      formData.append('content',user.content);
      formData.append('file',this.userfile);
    this.infoser.update(this.id,formData).subscribe(data=>{
      this.info=data;
      console.log(this.info);
      this.router.navigate(['list-infos'])
  });}
  onSelectFile(event){
    const file=event.target.files[0];
    console.log(file);
    this.userfile=file;
    
  }
  
  }
  