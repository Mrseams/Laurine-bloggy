import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private http: HttpClient, private route: ActivatedRoute){}
  post: any
  id: any
  loading =  true
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.post = this.http.get("http://103143.bloggy.ecole-it.devigne.space/posts/"+id)
    .subscribe( (res) => {
      this.post = res
      this.loading = false
    })
}

}
