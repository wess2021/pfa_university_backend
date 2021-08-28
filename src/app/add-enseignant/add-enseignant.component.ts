import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Enseignant } from './../classes/enseignant';
import { ClasseService } from './../services/classe.service';
import { EnseignantService } from './../services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  constructor(private enseignantService:EnseignantService,private classeservice:ClasseService,private router:Router) { }
  enseignants:any;
  public userfile:any;
  enseignant : Enseignant=new Enseignant();  
  submitted = false; 
 empselected:number;
  allclasses:any;
  id:number;
  enseignantsaveform:FormGroup;
  ngOnInit() {this.submitted=false;  
    this.enseignantsaveform=new FormGroup({  
      enseignant_fullname:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) ,
      adresse:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      email:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) ,
      telephone:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) 
     });  
    this.classeservice.getClasseList().subscribe(data=>{
      this.allclasses=data;
      console.log(this.allclasses);
    })
   
  };  

  save(enseignantsaveform:FormGroup) {  
       
    this.enseignant= new Enseignant();
    const enseignant=this.enseignantsaveform.value;
    console.log(enseignant);
   
    const formData=new FormData();
    formData.append('enseignant',enseignant);
    formData.append('enseignant_fullname',enseignant.enseignant_fullname);
    formData.append('adresse',enseignant.adresse);
    formData.append('email',enseignant.email);
    formData.append('telephone',enseignant.telephone);
    formData.append('id',this.userfile);
    console.log(formData);
    this.enseignantService.SaveEnseignant(formData).subscribe(data =>{console.log(data),this.router.navigate(['list-enseignant']);} );  

  }  

 
 
  onSelectFile(event:any){
    
    console.log(event.target.value);
    this.userfile=event.target.value;
  }
 
  
  
}

