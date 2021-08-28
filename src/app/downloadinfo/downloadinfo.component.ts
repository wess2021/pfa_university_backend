import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NoteInfoService } from '../services/note-info.service';
import { NoteInfo } from '../classes/note-info';

@Component({
  selector: 'app-downloadinfo',
  templateUrl: './downloadinfo.component.html',
  styleUrls: ['./downloadinfo.component.css']
})
export class DownloadinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private infoser:NoteInfoService) { }
    file:File;
    infos:any;
     info:any;
  ngOnInit() {
    this.info= new NoteInfo();
    this.file=this.route.snapshot.params['file'];
    
    console.log(this.file);
    this.infoser.downloadFile({'file':this.file}).subscribe(data=>{  
    saveAs(new Blob([data],{type:'application/octet-stream;charset=utf-8'}),this.file);
    console.log(data);
    })
  }

}
