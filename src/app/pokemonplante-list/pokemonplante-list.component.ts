import { Component } from '@angular/core';
import Pokemonplante from '../types/pokemonplante.type';

@Component({
  selector: 'app-pokemonplante-list',
  templateUrl: './pokemonplante-list.component.html',
  styleUrls: ['./pokemonplante-list.component.css']
})
export class PokemonplanteListComponent {

  pokemonplantes: Pokemonplante[] = [
    { id : 1, name : 'Bulbizarre' , taille: '40cm', evolution:'herbizarre-> florizzare', faiblesse:'feu', attaque:'118'},
    { id : 2, name : 'Mystherbe', taille: '20cm', evolution:'feunard -> hortide', faiblesse:'feu', attaque:'Acide , tranche herbe'},
    { id : 3, name : 'Paras', taille: '80cm', evolution:'Parasecte',  faiblesse:'feu', attaque:'griffe , piqure'},
    ];


  constructor() { }

  ngOnInit() {
  }
}
