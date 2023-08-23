import { Component, ContentChild, DoCheck, ElementRef, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Customer } from '../button-parent/button-parent.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { canExist } from 'src/app/deactivate-parent.guard';
import { Observable } from 'rxjs';
interface User {
  name: string;
  address?: {
    street?: string;
  };
}



@Component({
  selector: 'app-button',
  // inputs:['title','customer'],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit ,canExist{
  changelog: string[] = [];
  message = '';
  spanValue=2;
  product=null;
  id=null;
  isRed=true;
  @ContentChild("head") childContent:ElementRef;
  @ViewChild("") childView :ElementRef;
  @Input() title;
  @Input() customer;
  oldCustomer: Customer = new Customer();
  DocheckCount = 0;
  differ: any;
  user: User = {
    name: "John Doe"
  };
  street = this.user?.address?.street;
  // street2 = this.user.address!.street;
  innerText = "Call me"
  isDisabled=false;
    
  productList:any[];


  constructor(private route:ActivatedRoute,private api:ApiService) {
    console.log("-------------------");
    
    console.log("constructor");
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    console.log("-------------------");

  }

  canExist(): boolean | Observable<boolean> {
    if(confirm("Your data is not saved")){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("-------------------");

    console.log("OnChanges Called");
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    // console.log("->", this.customer);
    console.log("-------------------");


    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }

  ngOnInit(): void {
    this.productList = this.api.productDetails;
    // this.id= this.route.snapshot.params['id'];
    this.route.params.subscribe(response=>{
      this.id=response['id'];
    });
    
    console.log("-------------------");

    console.log("OnInIt");
    // console.log(this.title, " title", this.customer);
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    
    console.log("-------------------");

    
    // this.differ = this.differs.find(this.customer).create();

  }

  // ngDoCheck() {
  //   console.log('Docheck ->');
  //   this.DocheckCount++;
  //   const customerChanges = this.differ.diff(this.customer);

  //   if (customerChanges) {
  //     console.log(customerChanges);
  //     customerChanges.forEachChangedItem(r => this.changelog.push('changed ' + r.key + ' ' + JSON.stringify(r.currentValue)));
  //     customerChanges.forEachAddedItem(r => this.changelog.push('added ' + r.key + ' ' + JSON.stringify(r.currentValue)));
  //     customerChanges.forEachRemovedItem(r => this.changelog.push('removed ' + r.key + ' ' + JSON.stringify(r.currentValue)));
  //   }

  // }

  

  ngAfterContentInit() {
    console.log("-------------------");

    console.log('  ChildComponent==>ngAfterContentInit');
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    console.log("-------------------");

  }
 
  ngAfterContentChecked() {
    console.log("-------------------");
    
    console.log('  ChildComponent==>ngAfterContentChecked');
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    console.log("-------------------");

  }
 
  ngAfterViewInit() {
    console.log("-------------------");

    console.log('  ChildComponent==>AfterViewInit');
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    console.log("-------------------");

  }
 
   ngAfterViewChecked() {
    console.log("-------------------");

    console.log('  ChildComponent==>AfterViewChecked');
    console.log("Child Content",this.childContent);
    console.log("Child View",this.childView);
    console.log("-------------------");

  }
}
