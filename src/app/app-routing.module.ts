import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'home-page',component:HomePageComponent},
  { path: 'book-list', component: BookListComponent },
  { path: 'book-form', component: BookFormComponent},
  { path: 'book-detail/:index', component: BookDetailComponent },
  { path: '', redirectTo: '/book-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomePageComponent,BookListComponent,BookDetailComponent,BookFormComponent]