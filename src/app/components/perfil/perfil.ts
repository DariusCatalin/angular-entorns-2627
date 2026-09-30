import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {  }

/*
INTERPOLACIÓ DE DADES 
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de l'HTML, angular avalaua l'expressió i mostra el resultat com a text.

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra 5
{{text.toUpperCase()}} --> mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> operador ternari

amb {{nom}} --> el valor pot canviar i l'HTML s'actualitzarà automàticament. Hardcoded és x sempre estàtic.
*/