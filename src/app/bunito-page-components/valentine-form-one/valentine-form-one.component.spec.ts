import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineFormOneComponent } from './valentine-form-one.component';

describe('ValentineFormOneComponent', () => {
  let component: ValentineFormOneComponent;
  let fixture: ComponentFixture<ValentineFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineFormOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
