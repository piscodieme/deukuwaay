import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAbonnementPremiumComponent } from './type-abonnement-premium.component';

describe('TypeAbonnementPremiumComponent', () => {
  let component: TypeAbonnementPremiumComponent;
  let fixture: ComponentFixture<TypeAbonnementPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAbonnementPremiumComponent]
    });
    fixture = TestBed.createComponent(TypeAbonnementPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
