import { DepartementService } from './../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Departement } from '../departement';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute,private router: Router,private departementService:DepartementService) { }
  departementsArray: any[] = [];  
  departement_id:number;
 
  
  dtTrigger: Subject<any>= new Subject();  

  departements: any;  
  departement : Departement=new Departement();  
  deleteMessage=false;  
 departementlist:any;  
  isupdated = false;      
  reloadData(){
    this.departements=this.departementService.getDepartementList();
  }
  ngOnInit() {
    this.isupdated=false;  
   
    this.departementService.getDepartementList().subscribe(data =>{  
    this.departements =data;
    
    console.log(data);    
      
    })  
  }
  deleteDepartement(deprtement_id: number) {  
    console.log(deprtement_id);
    this.departementService.deleteDepartement(deprtement_id).subscribe(  
        data => {  
          console.log(data);  
     
          this.departementService.getDepartementList().subscribe(data =>{  
            this.departements =data  
            })  
        },  
        error => console.log(error));  
  }  
  updateDepartement(departement_id: number){  
    
          this.router.navigate(['/update-departement', departement_id]);
    
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
