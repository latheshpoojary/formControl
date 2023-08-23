import { AbstractControl } from "@angular/forms";

export class passwordValidator{
    static checkPassword(control:AbstractControl){
        return new Promise((resolve)=>{
            if(control.value!=='1234'){
                resolve({invalidOldPassword:true})
            }
            else{
                resolve(null);
            }
        })
    }

    static passwordShouldMatch(control:AbstractControl){
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value){
            return {passwordShouldMatch:true};
        }
        return null;
    }

}