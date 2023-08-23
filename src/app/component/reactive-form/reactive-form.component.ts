import { Component } from '@angular/core';
import {FormGroup,FormControl, NgForm, NgControl, Validators, FormArray,FormBuilder} from '@angular/forms';
import { existingNameValidator } from '../builder-form/existingName.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
 formInput :any;
 constructor(){

   this.formInput = new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.minLength(5),existingNameValidator.existingName]),
    email:new FormControl('',[Validators.required]),
    address:new FormGroup({
      contact:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    }),
    skill:new FormArray([])
   })

 }

 display(){
  console.log(this.formInput.value );
  
 }

 get fullname(){
  return this.formInput.get('fullName');
 }

 get email(){
  return this.formInput.get('email');
 }

 get contact(){
  return this.formInput.get('address.pincode');
 }

 get Skill(){
  return this.formInput.get('skill') as FormArray;
 }

  
 addSkill(skillSet:HTMLInputElement){
    this.Skill.push(
      new FormControl(skillSet.value)
    )
    console.log(this.formInput.value);
    
 }

 
 
 removeSkill(index:any){
  this.Skill.removeAt(index);
 }

}
