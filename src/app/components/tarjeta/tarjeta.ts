import { Component } from '@angular/core';
import { Producte } from '../../producte';
@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  nom: string = 'Teclat Mecànic';
  preu: number = 50;
  estoc: number = 10;

  producte : Producte = {}
}