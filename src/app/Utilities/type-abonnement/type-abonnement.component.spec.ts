import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAbonnementComponent } from './type-abonnement.component';

describe('TypeAbonnementComponent', () => {
  let component: TypeAbonnementComponent;
  let fixture: ComponentFixture<TypeAbonnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAbonnementComponent]
    });
    fixture = TestBed.createComponent(TypeAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
