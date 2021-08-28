import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteInfoService } from './../services/note-info.service';
import { Component, OnInit } from '@angular/core';
import { NoteInfo } from '../classes/note-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {
  NoteInfo:NoteInfo=new NoteInfo();
  message:String=" ";
  public userfile:any=File;
    constructor(private infoser:NoteInfoService,private router:Router) { }
    coursaveform=new FormGroup({  
      title:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
      content:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
      file: new FormControl()
   
    });  
    ngOnInit() {
    }
    save(coursaveform:FormGroup){
      
    this.NoteInfo= new NoteInfo();
    const user=coursaveform.value;
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userfile);
    this.infoser.SaveInfoNote(formData).subscribe(data => console.log(data));this.router.navigate(['list-infos']); 
    
    }
    onSelectFile(event){
      const file=event.target.files[0];
      console.log(file);
      this.userfile=file;
    }
      
  }
  
