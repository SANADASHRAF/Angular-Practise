import { Routes } from '@angular/router';
import { TodoComponent } from './Componants/todo/todo.component';

export const routes: Routes = [
    {path:'' , redirectTo:"/todo",pathMatch:"full"},
    {path:"todo",component:TodoComponent,title:"todo"},
    {path:"**" ,component:TodoComponent,title:"todo"}
];
