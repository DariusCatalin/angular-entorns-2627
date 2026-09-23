import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc } from './models/videojocs';

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
    }
  ];

}
