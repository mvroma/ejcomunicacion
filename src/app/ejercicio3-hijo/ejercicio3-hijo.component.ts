import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3-hijo.component.html',
  styleUrl: './ejercicio3-hijo.component.css'
})
export class Ejercicio3HijoComponent {
@Output()
llamadaPadre:EventEmitter<string> = new EventEmitter();
opcion:string = "";

opciones:string[] = ['JAVA','JSON','JS'];

enviarPadre(value:string){
  this.llamadaPadre.emit(this.opcion);
}
}
