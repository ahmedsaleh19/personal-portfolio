import { Component } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContactComponent } from './componentes/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, NavbarComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskOne';
}
