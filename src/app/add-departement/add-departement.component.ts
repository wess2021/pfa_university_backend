import { ClasseService } from './../services/classe.service';
import { DepartementService } from './../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Classe } from '../classe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  constructor(private departementService:DepartementService,private classeservice:ClasseService,private router:Router) { }  
  departements:any;
  public userfile:any;

  departement : Departement=new Departement();  
  submitted = false; 
empselected:number;
  allclasses:any;
  id:number;
  departementsaveform:FormGroup;
  
  ngOnInit() {    
    this.submitted=false;  
  this.departementsaveform=new FormGroup({  
    departement_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) 
   });  
  
 
};  

  
  save(departementsaveform:FormGroup) {  
       
    this.departement= new Departement();
    this.departement=this.departementsaveform.value;
    console.log(this.departement);
   
    this.departementService.createDepartement(this.departement).subscribe(data =>{console.log(data),this.router.navigate(['list-departement']);} );  

  }  

  
  get departement_name(){  
    return this.departementsaveform.get('departement_name');  
  }  

 
  
  
}
