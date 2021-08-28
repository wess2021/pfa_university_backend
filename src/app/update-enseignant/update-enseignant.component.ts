import { Enseignant } from './../classes/enseignant';
import { ClasseService } from './../services/classe.service';
import { EnseignantService } from './../services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
  id:number;
  enseignant:any;
  classes:any;
  userfile:any;
  classe:any;

  idcat:number;
  constructor(private router:Router,private route:ActivatedRoute,private EnseignantService:EnseignantService,private ClasseService:ClasseService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.EnseignantService.getEnseignant(this.id).subscribe(data=>{
      console.log(data)
      this.enseignant=data;
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
    let user:Enseignant=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('enseignant_fullname',user.enseignant_fullname);
     
      formData.append('adresse',user.adresse);
      formData.append('telephone',user.telephone);
     
      formData.append('email',user.email);
      formData.append('idclasse',this.classe);
      
      

    this.EnseignantService.updateEnseignant(this.id,formData).subscribe(data=>{
      this.enseignant=data;
      console.log(this.enseignant);
      this.router.navigate(['list-enseignant'])
  });}
  onSelectFile(event:any){
  
    console.log(event.target.value);
    this.classe=event.target.value;
  }

}
