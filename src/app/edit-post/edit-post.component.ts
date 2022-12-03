import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
 post: any
 loading = true
 id: any

  constructor(private http: HttpClient, private r: ActivatedRoute, private route: Router){}
 /**
  * save changes
  * @param formData 
  * @return void
  */
  editPost(formData: any){
    let data = {
      title: formData.value.title,
      resume: formData.value.desc,
      content: formData.value.content,
      created_at: DatePipe,
      image_url: formData.value.file,
      author_id: this.post.author_id,
    }

    this.post = this.http.put("http://103143.bloggy.ecole-it.devigne.space/posts/"+this.id, data)
    .subscribe((response) => {alert('enregistrer avec success')
    this.route.navigate(['/admin'])
  },
    (error) => {alert('erreur') })
  }

  

  ngOnInit(): void {
    this.id = this.r.snapshot.paramMap.get('id')
    this.post = this.http.get("http://103143.bloggy.ecole-it.devigne.space/posts/"+this.id)
    .subscribe( (res) => {
      this.post = res
      this.loading = false
    })
  }
}
