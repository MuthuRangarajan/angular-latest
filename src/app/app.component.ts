import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: { name: string; qty: number; }[]
 
 productName=new FormControl('');
 quantity=new FormControl('');

 constructor() {
   this.rows = [{
        name: 'Samsung Galaxy',
        qty: 2
        
      },{
        name: 'RealMe',
        qty: 3
        
      }];
 }

updateData(){
   
    this.rows.push(
      {
         name: this.productName.value,
        qty: this.quantity.value
        
      }
    );
    this.productName.setValue("");
    this.quantity.setValue("");
     
  }
}
