import { EditPostComponent } from './edit-post/edit-post.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EditCreatePostComponent } from './edit-create-post/edit-create-post.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'posts/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: EditCreatePostComponent
  },
  {
    path: 'post/:id/edit',
    component: EditPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
