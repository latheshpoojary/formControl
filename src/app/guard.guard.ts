import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from './shared/api.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user= localStorage.getItem("user");
  if(!user){
    console.log("false");
    alert("You are not Allowed to access this page")
    router.navigate(['password']);
    return false
    
  }
  return true;
};
