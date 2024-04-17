import { Component } from '@angular/core';
import { HijoMensajeComponent } from '../hijo-mensaje/hijo-mensaje.component';

@Component({
  selector: 'app-padre-mensaje',
  standalone: true,
  imports: [HijoMensajeComponent],
  templateUrl: './padre-mensaje.component.html',
  styleUrl: './padre-mensaje.component.css'
})
export class PadreMensajeComponent {
  mensaje: string ="Holiiiiii";
}
