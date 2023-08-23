import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product.model';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products:Product[];
  constructor(private route:ActivatedRoute,private api:ApiService){
    // this.api.getProduct().subscribe(data=>{
    //   this.products = data;
    // });
    this.products = this.route.snapshot.data['product'];
  }


}
