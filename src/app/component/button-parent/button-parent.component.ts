import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ApiService } from 'src/app/shared/api.service';
 
export class Customer {
  code: number;
  name: string;
  
}
@Component({
  selector: 'app-button-parent',
  templateUrl: './button-parent.component.html',
  styleUrls: ['./button-parent.component.scss']
})
export class ButtonParentComponent implements OnInit {
  title='';
  code=0;
  title2='';
  code2='';
  customer=new Customer() ;
  productDetails:any[];
  constructor(private api:ApiService){
    this.productDetails =this.api.productDetails;
  }
  onUpdate(){
    this.title2 = this.title;
    this.customer.name = this.title;
    this.customer.code = this.code;
 }


 ngOnInit(){
  console.log("oninit called");
  console.log("view Child in parent",this.viewChild);

  
 }

 message="";
 
 @ViewChild(ButtonComponent) viewChild: ButtonComponent;

 ngOnChanges() {
   console.log('AppComponent==>ngOnChanges');
  console.log("view Child in parent",this.viewChild);
  
 }

 ngDoCheck() {
    console.log('AppComponent==>ngDoCheck');
   console.log("view Child in parent",this.viewChild);
 }

 ngAfterContentInit() {
   console.log('AppComponent==>ngAfterContentInit');
  console.log("view Child in parent",this.viewChild);
 }

 ngAfterContentChecked() {
    console.log('AppComponent==>ngAfterContentChecked');
  console.log("view Child in parent",this.viewChild);
 }

 ngAfterViewInit() {
    console.log('AppComponent==>AfterViewInit');
  console.log("view Child in parent",this.viewChild);
 }

 ngAfterViewChecked() {
    console.log('AppComponent==>AfterViewChecked');
  console.log("view Child in parent",this.viewChild);
  //  this.message=this.viewChild.message;
  
   
 }


}
