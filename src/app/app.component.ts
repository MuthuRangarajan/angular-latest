import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rows: { name: string; qty: number; }[]
 m:string;

 constructor() {
   this.rows = [{
        name: 'default name',
        qty:2
      },{
        name: 'default name',
        qty:2
      }];
      
 }

 
  public onAddRowClick(): void {
this.m='m';
  
    this.rows.push(
      {
        name: this.m,
        qty:2
      }
    );
     console.log(this.rows)
  }
}
