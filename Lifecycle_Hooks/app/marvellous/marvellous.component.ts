import { Component } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html'
})

export class MarvellousComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy 
{
  data:number=100;

  constructor() 
  {   console.log('Inside Constructor');
      console.log("new - data is"+ this.data);
  }

  ngOnChanges() 
  {
      console.log("Inside ngOnChanges - data is"+ this.data);
  }

  ngOnInit() 
  {
      console.log("Inside ngOnInit  - data is " +this.data);
  }

  ngDoCheck() 
  {
      console.log("Inside ngDoCheck")
  }
  
  ngAfterContentInit() 
  {
      console.log("Inside ngAfterContentInit");
  }

  ngAfterContentChecked() 
  {
      console.log("Inside ngAfterContentChecked");
  }

  ngAfterViewInit() 
  {
      console.log("Inside ngAfterViewInit");
  }

  ngAfterViewChecked() 
  {
      console.log("Inside ngAfterViewChecked");
  }

  ngOnDestroy() 
  {
      console.log("Inside ngOnDestroy");
  }

  fnAddNumber():void
  {
      this.data+=1;
  }
  
  fnSubNumber():void
  {
      this.data -=1;
  }
}
