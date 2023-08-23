import { AbstractControl, ValidationErrors } from "@angular/forms";

export class existingNameValidator{
    static existingName(control:AbstractControl):Promise<ValidationErrors|null>{
       return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(control.value=='lathesh'){
                return resolve({findName:true});
            }
            else{
                return resolve(null);
            }
        }, 2000);
       })
    }
}