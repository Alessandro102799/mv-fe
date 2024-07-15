import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRoutingComponent } from './call-routing.component';

describe('CallRoutingComponent', () => {
  let component: CallRoutingComponent;
  let fixture: ComponentFixture<CallRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
