import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonplanteListComponent } from './pokemonplante-list.component';

describe('PokemonplanteListComponent', () => {
  let component: PokemonplanteListComponent;
  let fixture: ComponentFixture<PokemonplanteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonplanteListComponent]
    });
    fixture = TestBed.createComponent(PokemonplanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
