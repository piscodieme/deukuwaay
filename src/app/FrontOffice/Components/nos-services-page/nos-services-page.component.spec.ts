import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosServicesPageComponent } from './nos-services-page.component';

describe('NosServicesPageComponent', () => {
  let component: NosServicesPageComponent;
  let fixture: ComponentFixture<NosServicesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosServicesPageComponent]
    });
    fixture = TestBed.createComponent(NosServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
