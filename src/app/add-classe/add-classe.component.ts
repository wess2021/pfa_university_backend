import { Classe } from './../classe';
import { DepartementService } from './../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from '../services/classe.service';
import { Departement } from '../departement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  constructor(private departementService:DepartementService,private classeservice:ClasseService,private router:Router) { }
  classes:any;
  public userfile:any;
  classe : Classe=new Classe();  
  submitted = false; 
 empselected:number;
  alldepartements:any;
  id:number;
  classesaveform:FormGroup;
  ngOnInit() {this.submitted=false;  
    this.classesaveform=new FormGroup({  
      classe_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) 
     
     });  
    this.departementService.getDepartementList().subscribe(data=>{
      this.alldepartements=data;
      console.log(this.alldepartements);
    })
   
  };  

  save(classesaveform:FormGroup) {  
       
    this.classe= new Classe();
    const classe=this.classesaveform.value;
    console.log(classe);
   
    const formData=new FormData();
    formData.append('classe',classe);
    formData.append('classe_name',classe.classe_name);
    formData.append('id',this.userfile);
    console.log(formData);
    this.classeservice.createClasse(formData).subscribe(data =>{console.log(data),this.router.navigate(['list-classe']);} );  

  }  

 
 
  onSelectFile(event:any){
    
    console.log(event.target.value);
    this.userfile=event.target.value;
  }
 
  
  
}

