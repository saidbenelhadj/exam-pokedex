import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonfeuListComponent } from './pokemonfeu-list/pokemonfeu-list.component';
import { PokemonfoudreListComponent } from './pokemonfoudre-list/pokemonfoudre-list.component';
import { PokemonplanteListComponent } from './pokemonplante-list/pokemonplante-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonfeuListComponent,
    PokemonfoudreListComponent,
    PokemonplanteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
