import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../post/post.component';
import {Product} from '../../app/shared/product.model';
import { Observable, delay, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://jsonplaceholder.typicode.com/posts';
  user:any="hello";
  canActivateChild=true;
  productDetails=[
    {
    id:1,
    name:"watch",
    price:5000
    
  },
    {
    id:2,
    name:"dress",
    price:3000
    
  },
    {
    id:3,
    name:"shoes",
    price:2000
    
  },
    {
    id:4,
    name:"glass",
    price:200
    
  }
]
  product =[
    new Product(1,"phone",200000),
    new Product(2,"watch",10000),
    new Product(3,"grocery",250000),
    new Product(4,"dress",230000),
    new Product(5,"vehicle",500000),
    new Product(6,"refrigerator",200000)
  ]
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<Post[]>(this.url);
  }

  createPost(title:any){ 
    return this.http.post(this.url,JSON.stringify(title));
  }

  updatePost(post:Post){
    return this.http.patch<Post>(this.url+'/'+post.id,{isRed:true});
  }

  deletePost(id){
    return this.http.delete(this.url+'/'+id);
  }

  setUser(user:string){
     this.user = user;
     localStorage.setItem("user",this.user);
  }

  getProduct(){
    return of(this.product).pipe(delay(1000));
  }

  public getProductsError(): Observable<any> {
       return of(this.product).pipe(delay(3000), map( data => {
           throw throwError("errors occurred") ;        
       })) 
  }
}
