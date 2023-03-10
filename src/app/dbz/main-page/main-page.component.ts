import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBzServices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //llamar servicio en el contructor
  constructor( private dbZServices: DBzServices) { }

  ngOnInit(): void { }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  get personajes(): Personaje[] {
    return this.dbZServices.personajes;
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

  // agregarNuevoPersonaje(arg: Personaje) {
  //   // this.personajes.push(arg);
  // }

}
