import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { BuilderFormComponent } from './component/builder-form/builder-form.component';
import { DemoComponent } from './demo/demo.component';
import { PasswordComponent } from './component/password/password.component';
import { PostComponent } from './post/post.component';
import { ButtonComponent } from './component/button/button.component';
import { ButtonParentComponent } from './component/button-parent/button-parent.component';
import { guardGuard } from './guard.guard';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    BuilderFormComponent,
    DemoComponent,
    PasswordComponent,
    PostComponent,
    ButtonComponent,
    ButtonParentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
