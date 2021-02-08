import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCardDetailsComponent } from './enter-card-details.component';

describe('EnterCardDetailsComponent', () => {
  let component: EnterCardDetailsComponent;
  let fixture: ComponentFixture<EnterCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
