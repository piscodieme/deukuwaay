import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesPageComponent } from './agences-page.component';

describe('AgencesPageComponent', () => {
  let component: AgencesPageComponent;
  let fixture: ComponentFixture<AgencesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencesPageComponent]
    });
    fixture = TestBed.createComponent(AgencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
