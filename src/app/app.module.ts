import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { HomeComponent } from './component/home/home.component';
import { AdditemComponent } from './component/additem/additem.component';
import { EdititemComponent } from './component/edititem/edititem.component';
import { RightsidebarComponent } from './component/rightsidebar/rightsidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TodolistComponent,
    HomeComponent,
    AdditemComponent,
    EdititemComponent,
    RightsidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
