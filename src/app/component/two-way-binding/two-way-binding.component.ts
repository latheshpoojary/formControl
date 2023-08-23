import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  name='';
  email='';
  address='';
  formData:any=[];
  submit(){
    const formValue = {
      "name":this.name,
      "email":this.email,
      "address":this.address


    }
    this.formData.push(formValue);
    this.name='';
    this.email='';
    this.address='';

}
}
