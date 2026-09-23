import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc } from './interfaces/videojoc';
import { saludar, esMajorEdat, sumarArray } from './funcions_auxiliars';
import { Alumne } from './alumne';

export class Cistella {
  items: Videojoc[] = [];
  descompte: number;

  constructor(descompte: number) {
    this.descompte = descompte;
  }

  afegir(videojoc: Videojoc): void {
    this.items.push(videojoc);
  }

  calcularTotal(): number {
    const subtotal = this.items.reduce((acc, item) => acc + item.preu, 0);
    return subtotal * (1 - this.descompte / 100);
  }

  get numItems(): number {
    return this.items.length;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-entorns-2627');

  videojocs: Videojoc[] = [
    {
      id: 1, 
      nom: 'FC 27', 
      genere: 'Esport',
      anyLlancament: 2027,
      preu: 69.99,
      actiu: true,
      descripcio: 'Joc de futbol'
    },
    {
      id: 2, 
      nom: 'Roblox', 
      genere: 'General',
      anyLlancament: 2006,
      preu: 0,
      actiu: true,
    },
    {
      id: 3, 
      nom: 'GTA VI', 
      genere: 'Acció',
      anyLlancament: 2026,
      preu: 89.99,
      actiu: false,
    },
    {
      id: 4, 
      nom: 'NBA 2K27', 
      genere: 'Esport',
      anyLlancament: 2026,
      preu: 69.99,
      actiu: true,
    },
    {
      id: 5, 
      nom: 'Minecraft', 
      genere: 'Aventura',
      anyLlancament: 2009,
      preu: 24.99,
      actiu: true,
      descripcio: 'Joc de cubs'
    }
  ];

  getActius(): Videojoc[] {
    return this.videojocs.filter(v => v.actiu);
  }

  findById(id: number): Videojoc | undefined {
    return this.videojocs.find(v => v.id === id);
  }

  formatarElement(element: Videojoc): string {
    return `${element.nom} (${element.genere}, ${element.anyLlancament}) - ${element.preu}€`;
  }

    constructor() {
    console.log(saludar('Darius'));
    console.log(esMajorEdat(19));
    console.log(sumarArray([1, 2, 3, 4, 5]));

    const alumne1 = new Alumne('Darius', 19, 'DAW', [7, 3, 8]);
    const alumne2 = new Alumne('Eloy', 19, 'DAW', [5, 8, 6]);

    console.log(alumne1.presentar());
    console.log(alumne1.haAprobat);
    console.log(alumne2.presentar());
    console.log(alumne2.haAprobat);
  }
}
