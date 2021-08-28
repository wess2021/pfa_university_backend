import { Cour } from './../cour';
import { Component, OnInit } from '@angular/core';
import { CourService } from '../services/cour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cour',
  templateUrl: './list-cour.component.html',
  styleUrls: ['./list-cour.component.css']
})
export class ListCourComponent implements OnInit {
  cour:Cour=new Cour();
  public  message : any='';
  public cours:any=[];
  table_filtre:any;
  constructor(private CourService:CourService,private router: Router) {
   
  }

  ngOnInit() {
    this.CourService.getCours().subscribe(a =>{
      this.cours= a;this.table_filtre=this.cours;
      console.log(a);
    },err=>{console.log(err)
   }
    )
  }
  filt(a:string){
    return this.cours.filter(x=>x.title.indexOf(a)!=-1);
  }
  set x(a:string){
    this.table_filtre=this.filt(a);
    console.log(a);
  }
  editcour(id:number){
    this.router.navigate(['/update-cour', id]);
  }
  deletecour(id: number) {  
    console.log(id);
    this.CourService.deletecour(id).subscribe(  
        data => {  
          console.log(data);  
          
          this.CourService.getCours().subscribe(data =>{  
            this.cours =data  
            })  
        },  
        error => console.log(error));  
  }
 
  
  download3(file:File){
    this.router.navigate(['/download-cour', file]);
  }
  
}
