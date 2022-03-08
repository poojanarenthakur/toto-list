import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './component/additem/additem.component';
import { EdititemComponent } from './component/edititem/edititem.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { TodolistComponent } from './component/todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'todolist', pathMatch: 'full' },
      { path: '', redirectTo: 'todolist', pathMatch: 'full' },
      { path: 'add', component: AdditemComponent },
      { path: 'edit/:index', component: EdititemComponent },
      { path: 'todolist', component: TodolistComponent },
      { path: '**', redirectTo: 'todolist' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
