import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourService } from './../services/cour.service';
import { Cour } from './../cour';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-cour',
  templateUrl: './save-cour.component.html',
  styleUrls: ['./save-cour.component.css']
})
export class SaveCourComponent implements OnInit {
  cour:Cour=new Cour();
  message:String=" ";
  public userfile:any=File;
    constructor(private courService:CourService,private router:Router) { }
    coursaveform=new FormGroup({  
      title:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
      content:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),  
      file: new FormControl()
   
    });  
    ngOnInit() {
    }
    save(coursaveform:FormGroup){
      
    this.cour= new Cour();
    const user=coursaveform.value;
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userfile);
    this.courService.SaveUserProfile(formData).subscribe(data => console.log(data), error => console.log(error));  
    this.router.navigate(['cours']);
    }
    onSelectFile(event){
      const file=event.target.files[0];
      console.log(file);
      this.userfile=file;
    }
      
  }
  
