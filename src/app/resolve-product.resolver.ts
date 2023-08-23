import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { ApiService } from './shared/api.service';

export const resolveProductResolver: ResolveFn<boolean> = (route, state):any => {
  const service = inject(ApiService);
  const router = inject(Router);
  service.getProductsError().subscribe(response=>{  
    return response;
  },
  error=>{
    alert("Encountered Error");
    return null;
  }
    
  )
  
};
