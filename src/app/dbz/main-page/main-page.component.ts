import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegueta",
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(e: any) {
    e.preventDefault(); //los formularios reactivos nos evitan el uso de esto
    console.log("Hey!!!");
  }

  formularioReactivoAgregar() {
    console.log("es una prueba");
    console.log(this.nuevo);
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(arg: Personaje) {
    this.personajes.push(arg);
  }
}
