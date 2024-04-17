import { Component } from '@angular/core';
import { Ejercicio4HijoComponent } from '../ejercicio4-hijo/ejercicio4-hijo.component';
import { Persona } from '../persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4-padre',
  standalone: true,
  imports: [Ejercicio4HijoComponent, CommonModule],
  templateUrl: './ejercicio4-padre.component.html',
  styleUrl: './ejercicio4-padre.component.css'
})
export class Ejercicio4PadreComponent {
listaPersona:Persona[] = [];

recibirPersona(persona:Persona){
  console.log("Producto recibido;"+persona.nombre);
  if(!this.listaPersona.includes(persona)){
    this.listaPersona.push(persona);
  }
}
borrarUltimo(){
  this.listaPersona.pop();
}
filtarEdad(){
  let listaFiltrada = this.listaPersona.filter(persona=> persona.edad>20);
  this.listaPersona = listaFiltrada;
}
calcularDoble(){
  let listaFiltrada: Persona[] = this.listaPersona.map(persona=>{
    return {
      nombre: persona.nombre,
      edad: persona.edad*2
    }
  });
  this.listaPersona = listaFiltrada;
}
}
