import { Component, ViewChild } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray,FormBuilder} from '@angular/forms';
import { existingNameValidator } from './existingName.validator';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.scss']
})
export class BuilderFormComponent {
  formInput:any;
  skillName='';
  exp='';
  countryName='';
  set_country="";
  @ViewChild('container',{static:true}) container;
  countries =[
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ]

  constructor(private fb:FormBuilder){
    this.formInput=fb.group({
      fullName:['',
      [Validators.maxLength(5),Validators.required,existingNameValidator.existingName]],
      email:['',Validators.required],
      address:fb.group({
        contact:['',Validators.required]
      }),
      country:[null],
      skills:this.fb.array([])
    }
      
    )
  }

  ngOnInit() {
    const array1=[1,2,3,4,5,6,7]
    const array2=['a','b','c','d','e','f','g']  
    const obsof2=from("hello world" );
    
    obsof2.subscribe(val => setTimeout(()=>console.log(val),3000),
             error=> console.log("error"),
            () => console.log("complete"))

    const source = fromEvent(this.container.nativeElement, 'click');
    source.subscribe(val => console.log(val));
   
  }

  get form(){
    return this.formInput.controls;
  }
  display(){
    console.log(this.formInput.value);
    this.formInput.reset();
    
  }

  get skill(){
    return this.formInput.get('skills') as FormArray;
  }
 
  addSkill(){
    this.skill.push(this.newSkill());
  }

  newSkill(){
    return this.fb.group({
      skill:[null,Validators.required],
      exp:[null,Validators.required]
    })
  }

  AddCountry(){
    console.log(this.countryName);
    
    const isExist = this.countries.find(country=>country.name===this.countryName);
    if(!isExist){
      let id = Math.max.apply(Math,this.countries.map(o=>o.id));
      this.countries.push({id:id+1,name:this.countryName});
    }
    this.countryName = '';
  }

  setCountry() {
    const country = this.countries.find(el => el.name === this.set_country);
    if (country) {
      this.formInput.get("country").patchValue(country.id);
      console.log(this.formInput.get("country").value);
      
    }
  }
}
