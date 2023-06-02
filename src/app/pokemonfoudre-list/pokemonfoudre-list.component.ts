import { Component } from '@angular/core';
import Pokemonfoudre from '../types/pokemonfoudre.type';

@Component({
  selector: 'app-pokemonfoudre-list',
  templateUrl: './pokemonfoudre-list.component.html',
  styleUrls: ['./pokemonfoudre-list.component.css']
})
export class PokemonfoudreListComponent {

  pokemonfoudres: Pokemonfoudre[] = [
    { id : 1, name : 'Pika' , taille: '35cm', evolution:'Raichu', faiblesse:'eau', attaque:'112'},
    { id : 2, name : 'Electrode', taille: '42cm', evolution:'Noeunoeuf', faiblesse:'eau', attaque:'173'},
    { id : 3, name : 'Voltali', taille: '70cm', evolution:'Pyroli',  faiblesse:'eau', attaque:'232'},
    ];
    //selectedPokemonfeu: Pokemonfeu;

  constructor() { }
  
/*selectPokemonfeu(pokemonfeu: Pokemonfeu) {
    this.selectedPokemonfeu = pokemonfeu;
    }*/

  ngOnInit() {
  }
}
