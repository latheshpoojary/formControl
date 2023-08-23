import { Component } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  title = 'formControl';
  display(f:NgForm){
    console.log(f);
    
  }
  getInput(name:NgControl){
    console.log(name);
    
  }
}
