import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineFormFourComponent } from './valentine-form-four.component';

describe('ValentineFormFourComponent', () => {
  let component: ValentineFormFourComponent;
  let fixture: ComponentFixture<ValentineFormFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineFormFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineFormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
