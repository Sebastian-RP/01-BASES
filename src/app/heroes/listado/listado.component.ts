import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = "...";

  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  heroes: string[] = ['Spiderman', 'Ironman', 'Holk', 'Thor', 'Capitan America'];

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || this.heroeBorrado;
    console.log(this.heroeBorrado);
  };

  hayHeroeBorrado(): boolean {
    if (this.heroeBorrado == "...") {
      return false
    }
    return true
  };

}
