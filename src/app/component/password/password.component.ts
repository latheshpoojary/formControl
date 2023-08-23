import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './chnagePassword.validator';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  form:FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private api:ApiService){
    this.form=this.fb.group({
      oldPassword:['',Validators.required,passwordValidator.checkPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{
      validator:passwordValidator.passwordShouldMatch
    })

    
   }

   get oldPassword():AbstractControl | null{
    
    return this.form.get('oldPassword');
   }
   get newPassword(){
    return this.form.get('newPassword');
   }
   get confirmPassword(){
    return this.form.get('confirmPassword');
   }

   onSubmit(){
    console.log(this.form);
    this.api.setUser(this.confirmPassword.value);
    this.form.reset();
    this.route.navigate(['post']);
    
   }
}
