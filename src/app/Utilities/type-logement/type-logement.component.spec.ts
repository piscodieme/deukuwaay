import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLogementComponent } from './type-logement.component';

describe('TypeLogementComponent', () => {
  let component: TypeLogementComponent;
  let fixture: ComponentFixture<TypeLogementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeLogementComponent]
    });
    fixture = TestBed.createComponent(TypeLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
