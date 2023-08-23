

import { Component } from '@angular/core';
import { Validators, FormArray,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  formData :any;

  constructor(fb:FormBuilder){
    this.formData = fb.group({
      fullname : ['',[
        Validators.required,
        Validators.maxLength(10)
      ]],
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      address:fb.group({
        village:[''],
        pincode:[''],
        post:['']
      }),
      skill:fb.array([])

    })
  }

  get form(){
    return this.formData.controls;
  }

  get Skill(){
    // console.log(this.formData.get('skill'));
    
    return this.form.get('skill') as FormArray;
   }
  
    
   addSkill(skillSet:HTMLInputElement){
      this.Skill.push(
        (skillSet.value)
      )
      console.log(this.formData.value);
      
   }

 

  onSubmit(){
    console.log(this.formData.value);
    
  }


}
