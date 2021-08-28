import { Matiere } from './../classes/matiere';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.css']
})
export class ListMatiereComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute,private router: Router,private matiereService:MatiereService) { }
 matieresArray: any[] = [];  
  matiere_id:number;
  dtTrigger: Subject<any>= new Subject(); 
  matieres: any;  
  matiere : Matiere=new Matiere();  
  deleteMessage=false;  table_filtre:any;
 matierelist:any;  
  isupdated = false;      
  reloadData(){
    this.matieres=this.matiereService.getMatiereList();
  }
  ngOnInit() {
    this.isupdated=false;  
   
    this.matiereService.getMatiereList().subscribe(a =>{  
    this.matieres =a;this.table_filtre=this.matieres; 
    
    console.log(a);    
      
    })  
  }
  filt(a:string){
    return this.matieres.filter(x=>x.matiere_name.indexOf(a)!=-1);
  }
  set x(a:string){
    this.table_filtre=this.filt(a);
    console.log(a);
  }
  deleteMatiere(matiere_id: number) {  
    console.log(matiere_id);
    this.matiereService.deleteMatiere(matiere_id).subscribe(  
        data => {  
          console.log(data);  
          this.matiereService.getMatiereList().subscribe(data =>{  
            this.matieres=data ; 
            })  
        },  
        error => console.log(error));  
  }  
  updateMatiere(matiere_id: number){  
    
          this.router.navigate(['/update-matiere', matiere_id]);
    
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}

