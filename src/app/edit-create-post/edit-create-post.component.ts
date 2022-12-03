import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-edit-create-post',
  templateUrl: './edit-create-post.component.html',
  styleUrls: ['./edit-create-post.component.css']
})
export class EditCreatePostComponent implements OnInit{

  post: any
  authors: any=[]
  author: any

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getAuthors();
}


/**
 * fetch all authors
 * @params null
 * @return json
 */
getAuthors(){
  this.authors = this.http.get("http://103143.bloggy.ecole-it.devigne.space/authors/")
  .subscribe( (response) => this.authors = response )

}

/**
 * fetch all authors
 * @params Object Formdata
 * @return boolean
 */

//!I've got and error here because of  cors policy, i was enabled to solve it, donnu if it was from ur server

  createPost(formData: any){

    let data = {
      title: formData.value.title,
      resume: formData.value.desc,
      content: formData.value.content,
      created_at: DatePipe,
      image_url: formData.value.file,
      author_id: formData.value.author,
    }
    this.post = this.http.post("http://103143.bloggy.ecole-it.devigne.space/posts/", data)
    .subscribe((response) => {alert('ajouter avec success')
  },
    (error) => {alert('erreur') })
  }

}
