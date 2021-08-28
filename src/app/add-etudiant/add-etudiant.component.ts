import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Etudiant } from './../classes/etudiant';
import { ClasseService } from './../services/classe.service';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  constructor(private etudiantService:EtudiantService,private classeservice:ClasseService,private router:Router) { }
  etudiants:any;
  public userfile:any;
  etudiant : Etudiant=new Etudiant();  
  submitted = false; 
 empselected:number;
  allclasses:any;
  id:number;
  etudiantsaveform:FormGroup;
  ngOnInit() {this.submitted=false;  
    this.etudiantsaveform=new FormGroup({  
      fullname_etu:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) ,
      adresse:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      email:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) ,
      tel:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) ,
      cin:new FormControl('' , [Validators.required , Validators.minLength(5) ] ) 
     });  
    this.classeservice.getClasseList().subscribe(data=>{
      this.allclasses=data;
      console.log(this.allclasses);
    })
   
  };  

  save(enseignantsaveform:FormGroup) {  
       
    this.etudiant= new Etudiant();
    const etudiant=this.etudiantsaveform.value;
    console.log(etudiant);
   
    const formData=new FormData();
    formData.append('etudient',etudiant);
    formData.append('fullname_etu',etudiant.fullname_etu);
    formData.append('adresse',etudiant.adresse);
    formData.append('email',etudiant.email);
    formData.append('tel',etudiant.tel);
    formData.append('cin',etudiant.cin);
    formData.append('idclasse',this.userfile);
    console.log(formData);
    this.etudiantService.SaveEtudiant(formData).subscribe(data =>{console.log(data),this.router.navigate(['list-etudiants']);} );  

  }  

 
 
  onSelectFile(event:any){
    
    console.log(event.target.value);
    this.userfile=event.target.value;
  }
 
  
  
}

