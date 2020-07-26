import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rows: { name: string; qty: number; }[]
 
 productName=new FormControl('');
 quantity=new FormControl('');

 constructor() {
   this.rows = [{
        name: 'default name',
        qty: 20
        
      }];
 }

 
  public updateData(){
   
    this.rows.push(
      {
         name: this.productName.value,
        qty: this.quantity.value
        
      }
    );
     
  }
}
