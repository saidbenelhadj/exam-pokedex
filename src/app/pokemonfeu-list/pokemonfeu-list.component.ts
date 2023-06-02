import { Component } from '@angular/core';
import Pokemonfeu from '../types/pokemonfeu.type';

@Component({
  selector: 'app-pokemonfeu-list',
  templateUrl: './pokemonfeu-list.component.html',
  styleUrls: ['./pokemonfeu-list.component.css']
})
export class PokemonfeuListComponent {

  pokemonfeus: Pokemonfeu[] = [
    { id : 1, name : 'Salameche' , taille: '30cm', evolution:'Reptincel -> Dracaufeu', faiblesse:'eau', attaque:'116'},
    { id : 2, name : 'goupix', taille: '40cm', evolution:'feunard', faiblesse:'eau', attaque:'96'},
    { id : 3, name : 'Caninos', taille: '80cm', evolution:'Arcanin',  faiblesse:'eau', attaque:'136'},
    ];

    //selectedPokemonfeu: Pokemonfeu;

  constructor() { }

  /*selectPokemonfeu(pokemonfeu: Pokemonfeu) {
    this.selectedPokemonfeu = pokemonfeu;
    }*/

  ngOnInit() {
  }

}
