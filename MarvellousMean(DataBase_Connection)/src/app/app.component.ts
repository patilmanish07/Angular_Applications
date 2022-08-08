import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  title = 'Client';

  constructor(private service : AppServiceService)
  {}

  ngOnInit()
  {
    this.getBathesfromAPI()
  }

  getBathesfromAPI()
  {
       this.service.getBatches().subscribe((Response)=>{
      console.log("Data from server : ",Response);
    });
  }
}
