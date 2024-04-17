import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4-hijo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio4-hijo.component.html',
  styleUrl: './ejercicio4-hijo.component.css'
})
export class Ejercicio4HijoComponent {
  nombre: string = '';
  edad: number = 0;
@Output() enviarLista = new EventEmitter<Persona>();

enviarPersona(){
  let persona: Persona = {
    nombre:this.nombre, edad:this.edad
  };
  this.enviarLista.emit(persona);
  console.log("Persona enviada" + persona.nombre+" "+persona.edad)
}
}

