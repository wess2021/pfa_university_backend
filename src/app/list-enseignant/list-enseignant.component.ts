import { Enseignant } from './../classes/enseignant';
import { Subject } from 'rxjs';
import { EnseignantService } from './../services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-enseignant',
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute,private router: Router,private enseignantService:EnseignantService) { }

  enseignant_id:number;
 
  
  dtTrigger: Subject<any>= new Subject();  
  table_filtre:any;
  enseignants: any;  
  enseignant : Enseignant=new Enseignant();  
  deleteMessage=false;  

  isupdated = false;      
  reloadData(){
    this.enseignants=this.enseignantService.getEnseignantList();
  }
  ngOnInit() {
    this.isupdated=false;  
   
    this.enseignantService.getEnseignantList().subscribe(a =>{  
    this.enseignants =a;this.table_filtre=this.enseignants;
    
    console.log(a);    
      
    })  
  }
  filt(a:string){
    return this.enseignants.filter(x=>x.email.indexOf(a)!=-1);
  }
  set x(a:string){
    this.table_filtre=this.filt(a);
    console.log(a);
  }
  
  deleteEnseignant(enseignant_id: number) {  
    console.log(enseignant_id);
    this.enseignantService.deleteEnseignant(enseignant_id).subscribe(  
        data => {  
          console.log(data);  
     
          this.enseignantService.getEnseignantList().subscribe(data =>{  
            this.enseignants =data  
            })  
        },  
        error => console.log(error));  
  }  
  updateEnseignant(enseignant_id: number){  
    
          this.router.navigate(['/update-enseignant', enseignant_id]);
    
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}

