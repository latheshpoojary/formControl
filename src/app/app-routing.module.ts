import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { TemplateBindingParseResult } from '@angular/compiler';
import { PostComponent } from './post/post.component';
import { PasswordComponent } from './component/password/password.component';
import { ButtonComponent } from './component/button/button.component';
import { ButtonParentComponent } from './component/button-parent/button-parent.component';
import { guardGuard } from './guard.guard';
import { parentGuardGuard } from './parentguard.guard';
import { deactivateParentGuard } from './deactivate-parent.guard';
import { ProductComponent } from './product/product.component';
import { resolveProductResolver } from './resolve-product.resolver';
import { BuilderFormComponent } from './component/builder-form/builder-form.component';

const routes: Routes = [
  {path:'',redirectTo:'password',pathMatch:'full'},
  {path:'password',component:PasswordComponent},
  {path:'post',component:PostComponent,canActivate:[guardGuard],
  canDeactivate:[deactivateParentGuard]},
  {path:'builder',component:BuilderFormComponent},
  
  {path:'parent',component:ButtonParentComponent,
   children:[
    {path:'button/:id',component:ButtonComponent,
     children:[
      {path:'product',component:ProductComponent,resolve:{product:resolveProductResolver}}
     ]},
   ],
   canActivate:[guardGuard],canActivateChild:[parentGuardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
