import { Classe } from './../classe';
import { DepartementService } from './../services/departement.service';
import { ClasseService } from './../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
  id:number;
  classe:any;
  departements:any;
  userfile:any;
  departement:any;
  departement_name:any;
  idcat:number;
  constructor(private router:Router,private route:ActivatedRoute,private classeser:ClasseService,private depService:DepartementService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.classeser.getClasse(this.id).subscribe(data=>{
      console.log(data)
      this.classe=data;
      this.getdepartements();
    });
  }
  getdepartements(){
    this.depService.getDepartementList().subscribe(data=>{
      this.departements=data;
      console.log(this.departements);
    });
  }
  onsubmit(f:NgForm){
    let user:Classe=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('classe_name',user.classe_name);
    
      formData.append('iddep',this.departement);
      
      

    this.classeser.updateClasse(this.id,formData).subscribe(data=>{
      this.classe=data;
      console.log(this.classe);
      this.router.navigate(['list-classe'])
  });}
  onSelectFile(event:any){
  
    console.log(event.target.value);
    this.departement=event.target.value;
  }

}
