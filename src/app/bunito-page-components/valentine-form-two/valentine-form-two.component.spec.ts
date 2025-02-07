import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineFormTwoComponent } from './valentine-form-two.component';

describe('ValentineFormTwoComponent', () => {
  let component: ValentineFormTwoComponent;
  let fixture: ComponentFixture<ValentineFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineFormTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
