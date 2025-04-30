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
  Title: string = "Todo List Application";
  imageLink: string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

  tasks: string[] = [];
  newTask: string = "";
  Isavilaple: boolean = false;


  addTask() {
    
    if (this.newTask !== "") 
    {
      this.tasks.push(this.newTask.trim());
      this.Isavilaple = true;
      this.newTask = "";
    }

    console.log(this.tasks)
  }

  RemoveTask(index: number) 
  {
    this.tasks.splice(index ,1);
    this.Isavilaple=this.tasks.length>0
  }

  // EditTask(index: number) {
  //   var EditTask = prompt("Edit My Task", this.tasks[index])
  //   if (EditTask!=null)
  //   {
  //     this.tasks[index]=EditTask.trim();
  //   }
  // }

  EditTask(index: number ,newstring:string)
  {
    const trimstring=newstring.trim();
    if (trimstring!=="")
      {
        this.tasks[index]=trimstring;
      }
      {
        newstring=this.tasks[index];
        return this.newTask=newstring;
      }
    
      this.newTask=";"
  }
}
