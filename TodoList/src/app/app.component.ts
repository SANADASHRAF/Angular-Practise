import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TODOComponent } from './Componants/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TODOComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
}
