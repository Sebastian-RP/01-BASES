import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DBzServices) { }

  ngOnInit(): void {
  }

  // @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje;

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregarALista() {
    if (this.nuevo.nombre.trim().length === 0) { return }

    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
    // console.log(this.personajes);//los valores si pasan al componente padre ya qeu se pasan por referencia, (en el arreglo)
  }


}
