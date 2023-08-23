import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body?: string;
  isRed?:boolean
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  posts:Post[];
  createMessage=null;
  form:any;
  constructor(private api:ApiService,private http:HttpClient,private route:Router){
    this.form = new FormGroup({
      title : new FormControl('',Validators.required)
    })
  }

  get formDetails(){
    console.log(this.form.controls);
    
    return this.form.controls;
  }

  ngOnInit(): void {
    this.getPost();
  }

  createPost(title:HTMLInputElement){
    if(title.value==''){
      this.createMessage = "Title should Not be empty";
      alert(this.createMessage);
      return;
    }
    const postTitle = {title:title.value};
    this.api.createPost(postTitle).subscribe(response=>{
      if(response){
        console.log(response['id']);
        postTitle['id'] = response['id'];
        console.log(postTitle);
        
        this.createMessage = "Post Created Successfully";
        alert(this.createMessage);
        title.value='';
        this.posts.splice(0,0,postTitle)
      } 
     
    });
  }

  getPost(){
    this.api.getPost().subscribe(response=>{
      this.posts = response;
    })
  }

  updatePost(post:Post){
    this.api.updatePost(post).subscribe(response=>{
      this.posts.splice(0,0,response);
    })
  }

  onDelete(post:Post){
    // 
   
    
    this.api.deletePost(post.id).subscribe(response=>{
     const index = this.posts.indexOf(post);
     this.posts.splice(index,1);
      
    })
  }

  onLogout(){
    localStorage.removeItem("user");
    this.route.navigate(['password']);
  }
}
