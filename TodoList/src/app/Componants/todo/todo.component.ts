import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TODOComponent {
Title:string="Todo List Application";
imageLink : string="https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

tasks : string[] =[];
  newTask : string="";
  addTask()
  {
    if(this.newTask !=="")
    {
      this.tasks.push(this.newTask.trim());
      this.newTask="";
    }
   
    console.log(this.tasks)
  }
}
