import { Routes } from '@angular/router';
import { HomeComponent } from './Componant/home/home.component';
import { AboutComponent } from './Componant/about/about.component';
import { ContactusComponent } from './Componant/contactus/contactus.component';
import { FooterComponent } from './Componant/footer/footer.component';
import { HeaderComponent } from './Componant/header/header.component';
import { TodosDetailsComponent } from './Componant/todos-details/todos-details.component';
import { NotFoundComponent } from './Componant/not-found/not-found.component';
import { TodosComponent } from './Componant/todos/todos.component';

export const routes: Routes = 
[
{path:"",redirectTo:"/todos",pathMatch:'full'},
{path:"home",component:HomeComponent,title:"Home"},
{path:"about",component:AboutComponent,title:"About"},
{path:"contactus",component:ContactusComponent,title:"contactus"},
{path:"footer",component:FooterComponent,title:"footer"},
{path:"header",component:HeaderComponent,title:"header"},
{path:"todos/:id",component:TodosDetailsComponent,title:"todos-details"},
{path:"todos",component:TodosComponent,title:"todos"},
{path:"**",component:NotFoundComponent,title:"Not Found"},

];
