import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { ApiService } from './shared/api.service';

export const parentGuardGuard: CanActivateChildFn = (childRoute, state) => {
  const service = inject(ApiService);
  const router=inject(Router)
  if(!service.canActivateChild){
    alert("You are not Allowed to this page");
    router.navigate(['parent'])
    return false;
  }
  
  return true;
};
