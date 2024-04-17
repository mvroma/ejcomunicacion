import { Component } from '@angular/core';
import { Ejercicio3HijoComponent } from '../ejercicio3-hijo/ejercicio3-hijo.component';

@Component({
  selector: 'app-ejercicio3-padre',
  standalone: true,
  imports: [Ejercicio3HijoComponent],
  templateUrl: './ejercicio3-padre.component.html',
  styleUrl: './ejercicio3-padre.component.css'
})
export class Ejercicio3PadreComponent {
asignaturas:string[] = [];

recibirDato(dato:string){
  this.asignaturas.push(dato);
}
}
