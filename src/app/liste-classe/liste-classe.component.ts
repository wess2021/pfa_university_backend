import { ClasseService } from './../services/classe.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from '../classe';

@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})
export class ListeClasseComponent implements OnInit {

  constructor(private router: Router,private classeService:ClasseService) { }
  classesArray: any[] = [];  
 
  
  dtTrigger: Subject<any>= new Subject();  

  classes: any;  
  classe : Classe=new Classe();  
  deleteMessage=false;  
 classelist:any;  
  isupdated = false;      
  reloadData(){
    this.classes=this.classeService.getClasseList();
  }
  ngOnInit() {
    this.isupdated=false;  
   
    this.classeService.getClasseList().subscribe(data =>{  
    this.classes =data;
    
    console.log(data);    
      
    })  
  }
  deleteClasse(id: number) {  
    console.log(id);
    this.classeService.deleteClasse(id).subscribe(  
        data => {  
          console.log(data);  
          this.classeService.getClasseList().subscribe(data =>{  
            this.classes=data ; 
            })  
        },  
        error => console.log(error));  
  }  
  updateClasse(id: number){  
    
          this.router.navigate(['/update-classe', id]);
    
  }  

}
