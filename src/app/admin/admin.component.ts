import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  ngOnInit(): void {
      this.getPosts()
  }

  posts: any

  constructor(private http: HttpClient, private r: Router){}

  getPosts(){
    this.posts = this.http.get("http://103143.bloggy.ecole-it.devigne.space/posts/")
    .subscribe(  (res) => this.posts = res )
  }

  /**
   * delele a post
   * @param id 
   * @return void
   */

  deletePost(id: any){
    let del = false

    if(confirm("voulez-vous vraiment supprimer la publication?")){
      del = true
    }

    if(del == true){
      this.posts = this.http.delete("http://103143.bloggy.ecole-it.devigne.space/posts/"+id)
      .subscribe(  (res) =>{ this.r.navigate(['/admin']);},
        (err) => {  alert(' Huh huston?!, we got a big problem!. check the console');console.log(err)} )
    }

  }
}
