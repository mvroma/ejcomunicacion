import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './hijo-mensaje.component.html',
  styleUrl: './hijo-mensaje.component.css'
})
export class HijoMensajeComponent {
  @Input() mensajeRecibido: string='';

}
