import { Etudiant } from './../classes/etudiant';
import { Subject } from 'rxjs';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute,private router: Router,private etudiantService:EtudiantService) { }

  etudiant_id:number;
 
  
  dtTrigger: Subject<any>= new Subject();  

  etudiants: any;  
  etudiant : Etudiant=new Etudiant();  
  deleteMessage=false;  
  table_filtre:any;
  isupdated = false;      
  reloadData(){
    this.etudiants=this.etudiantService.getEtudiantList();
  }
  ngOnInit() {
    this.isupdated=false;  
   
    this.etudiantService.getEtudiantList().subscribe(a =>{  
    this.etudiants =a;this.table_filtre=this.etudiants; 
    
    console.log(a);    
      
    })  
  }
  filt(a:string){
    return this.etudiants.filter(x=>x.email.indexOf(a)!=-1);
  }
  set x(a:string){
    this.table_filtre=this.filt(a);
    console.log(a);
  }
  
  deleteEtudiant(etudiant_id: number) {  
    console.log(etudiant_id);
    this.etudiantService.deleteEtudiant(etudiant_id).subscribe(  
        data => {  
          console.log(data);  
     
          this.etudiantService.getEtudiantList().subscribe(data =>{  
            this.etudiants =data  
            })  
        },  
        error => console.log(error));  
  }  
  updateEtudiant(etudiant_id: number){  
    
          this.router.navigate(['/update-etudiant', etudiant_id]);
    
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}

