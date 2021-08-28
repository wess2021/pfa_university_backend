import { Etudiant } from './../classes/etudiant';
import { ClasseService } from './../services/classe.service';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  id:number;
  etudiant:any;
  classes:any;
  userfile:any;
  classe:any;
  nom:any
  quantite:any;
  prix:any;
  idcat:number;
  constructor(private router:Router,private route:ActivatedRoute,private EtudiantService:EtudiantService,private ClasseService:ClasseService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.EtudiantService.getEtdiant(this.id).subscribe(data=>{
      console.log(data)
      this.etudiant=data;
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
    let user:Etudiant=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('fullname_etu',user.fullname_etu);
     
      formData.append('adresse',user.adresse);
      formData.append('tel',user.tel);
      formData.append('cin',user.cin);
      formData.append('email',user.email);
      formData.append('idclasse',this.classe);
      
      

    this.EtudiantService.updateEtudiant(this.id,formData).subscribe(data=>{
      this.etudiant=data;
      console.log(this.etudiant);
      this.router.navigate(['list-etudiants'])
  });}
  onSelectFile(event:any){
  
    console.log(event.target.value);
    this.classe=event.target.value;
  }

}
