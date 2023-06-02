import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonfoudreListComponent } from './pokemonfoudre-list.component';

describe('PokemonfoudreListComponent', () => {
  let component: PokemonfoudreListComponent;
  let fixture: ComponentFixture<PokemonfoudreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonfoudreListComponent]
    });
    fixture = TestBed.createComponent(PokemonfoudreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
