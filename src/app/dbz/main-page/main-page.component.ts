import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 140000
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

}
