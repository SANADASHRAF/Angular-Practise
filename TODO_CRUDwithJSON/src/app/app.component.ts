import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Componant/header/header.component';
import { FooterComponent } from './Componant/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODO_CRUDwithJSON';
}
