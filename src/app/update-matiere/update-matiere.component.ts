import { ClasseService } from './../services/classe.service';
import { MatiereService } from './../services/matiere.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Matiere } from '../classes/matiere';

@Component({
  selector: 'app-update-matiere',
  templateUrl: './update-matiere.component.html',
  styleUrls: ['./update-matiere.component.css']
})
export class UpdateMatiereComponent implements OnInit {
  id:number;
  matiere:any;
  classes:any;
  user:any;
  classe:any;
  matiere_name:any;
  idcat:number;
  constructor(private router:Router,private route:ActivatedRoute,private matierser:MatiereService,private ClasseService:ClasseService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.matierser.getMatiere(this.id).subscribe(data=>{
      console.log(data)
      this.matiere=data;
      this.getclasses();
    });
  }
  getclasses(){
    this.ClasseService.getClasseList().subscribe(data=>{
      this.classes=data;
      console.log(this.classes);
    });
  }
  onsubmit(f:NgForm){
    let user:Matiere=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('matiere_name',user.matiere_name);
     
     
      formData.append('idclasse',this.classe);
      
      

    this.matierser.updateMatiere(this.id,formData).subscribe(data=>{
      this.matiere=data;
      console.log(this.matiere);
      this.router.navigate(['list-matieres'])
  });}
  onSelectFile(event:any){
  
    console.log(event.target.value);
    this.classe=event.target.value;
  }

}
