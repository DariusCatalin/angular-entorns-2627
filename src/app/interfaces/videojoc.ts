export interface Videojoc {
  id: number;
  nom: string;
  genere: string;
  anyLlancament: number;
  preu: number;
  actiu: boolean;
  descripcio?: string;
}