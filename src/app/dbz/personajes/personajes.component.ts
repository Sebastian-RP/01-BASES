import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBzServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService: DBzServices ) { 
    this.dbzService
  }

  ngOnInit(): void {
  }
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
}
