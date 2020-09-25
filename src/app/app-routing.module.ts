import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';
import { FormBuilderComponent } from './formBuilder/formBuilder.component';



const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'formBuilder', component: FormBuilderComponent},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'} // Lazy Loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
