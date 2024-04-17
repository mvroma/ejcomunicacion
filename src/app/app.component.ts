import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoMensajeComponent } from './hijo-mensaje/hijo-mensaje.component';
import { PadreMensajeComponent } from './padre-mensaje/padre-mensaje.component';
import { Ejercicio3HijoComponent } from './ejercicio3-hijo/ejercicio3-hijo.component';
import { Ejercicio3PadreComponent } from './ejercicio3-padre/ejercicio3-padre.component';
import { FormsModule} from '@angular/forms';
import { Ejercicio2HijoComponent } from './ejercicio2-hijo/ejercicio2-hijo.component';
import { Ejercicio2PadreComponent } from './ejercicio2-padre/ejercicio2-padre.component';
import { Ejercicio4HijoComponent } from './ejercicio4-hijo/ejercicio4-hijo.component';
import { Ejercicio4PadreComponent } from './ejercicio4-padre/ejercicio4-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoMensajeComponent, PadreMensajeComponent, Ejercicio2HijoComponent, Ejercicio2PadreComponent,Ejercicio3HijoComponent, Ejercicio3PadreComponent,FormsModule, Ejercicio4HijoComponent, Ejercicio4PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejcomunicacion';
}
