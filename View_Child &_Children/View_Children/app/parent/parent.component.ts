import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import {Directive, Input} from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})

export class ParentComponent
{
  @ViewChildren(ChildComponent) myValue:QueryList<ChildComponent>;

     ngAfterViewInit()
     {
       console.log(this.myValue.toArray());
     }
  
}


//Uncomment the following code when you want to use viewchildren
// export class FirstComponent implements OnInit {

//   @ViewChildren(ClockComponent) myValue:QueryList<ClockComponent>;

//   constructor() { 
//     console.log(this.myValue);
//   }

//   ngAfterViewInit(){
//     console.log(this.myValue.toArray());
//   }

//   ngOnInit() {
//   }

// }




// //Uncomment the code when you want to use viewchild

// export class FirstComponent implements OnInit {

//   @ViewChild(ClockComponent) myValue:ClockComponent;

//   constructor() { 
//     console.log(this.myValue);
//   }

//   ngAfterViewInit(){
//     console.log(this.myValue);
//     // setInterval(()=>{
//     //   this.myValue.today=new Date();
//     // },1000)
//   }

//   ngOnInit() {
//   }

// }
