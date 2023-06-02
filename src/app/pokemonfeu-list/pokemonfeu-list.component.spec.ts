import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonfeuListComponent } from './pokemonfeu-list.component';

describe('PokemonfeuListComponent', () => {
  let component: PokemonfeuListComponent;
  let fixture: ComponentFixture<PokemonfeuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonfeuListComponent]
    });
    fixture = TestBed.createComponent(PokemonfeuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
