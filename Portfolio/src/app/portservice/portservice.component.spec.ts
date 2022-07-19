import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortserviceComponent } from './portservice.component';

describe('PortserviceComponent', () => {
  let component: PortserviceComponent;
  let fixture: ComponentFixture<PortserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
