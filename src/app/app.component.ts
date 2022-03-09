import { Component, OnInit } from '@angular/core';
import { HarryService } from './harry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptors';

  constructor(private harryService: HarryService){}

  ngOnInit(){
    localStorage.setItem("token","ASDGFFSADDSFDSADSADAS")
    this.harryService.getDataHarry().subscribe(resp =>{
      console.log("Data enviada")
    })
  }
}
