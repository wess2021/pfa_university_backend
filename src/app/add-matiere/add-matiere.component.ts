import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Matiere } from './../classes/matiere';
import { ClasseService } from './../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  constructor(private matiereService:MatiereService,private classeservice:ClasseService,private router:Router) { }
  matieres:any;
  public userfile:any;

  matiere : Matiere=new Matiere();  
  submitted = false; 
empselected:number;
  allclasses:any;
  id:number;

  matieresaveform:FormGroup;
  ngOnInit(){ this.submitted=false;  
  this.matieresaveform=new FormGroup({  
    matiere_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) 
    
    
   
  });  
  this.classeservice.getClasseList().subscribe(data=>{
    this.allclasses=data;
    console.log(this.allclasses);
  })
 
}

save(matieresaveform:FormGroup) {  
       
  this.matiere= new Matiere();
  const matiere=this.matieresaveform.value;
  console.log(matiere.matiere_name);
 
  const formData=new FormData();
  formData.append('matiere',matiere.matiere_name);
  formData.append('id',this.userfile);
  console.log(formData);
  this.matiereService.SaveMatiere(formData).subscribe(data =>{console.log(data),this.router.navigate(['list-matieres']);} );  

}  

addmatiereForm(){  
  this.submitted=false;  
  this.matieresaveform.reset();  
}  
get matiere_name(){  
  return this.matieresaveform.get('matiere_name');  
}  
onSelectFile(event:any){
  
  console.log(event.target.value);
  this.userfile=event.target.value;
} 

}
