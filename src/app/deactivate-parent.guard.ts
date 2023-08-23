import { Inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface canExist{
  canExist():boolean | Observable<boolean>;
}

export const deactivateParentGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component);
  
  if(component && component?.formDetails){
    const isConfirmed = confirm("Data not be Saved.Are you sure want to go back?");
    if(isConfirmed){
      return true;
    }
    else{
      return false;
    }
  }
  return true;
  
 
};
