import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any
  loading =  true

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.getPosts();
      console.log(this.posts);
  }


  /**
 * fetch all posts
 * @params null
 * @retrun json
 */
  getPosts(){
    
    this.posts = this.http.get("http://103143.bloggy.ecole-it.devigne.space/posts/")
    .subscribe( (res) => {
      this.posts = res
      this.loading = false
    })
  }
}
