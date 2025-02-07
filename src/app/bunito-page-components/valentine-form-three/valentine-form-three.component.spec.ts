import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineFormThreeComponent } from './valentine-form-three.component';

describe('ValentineFormThreeComponent', () => {
  let component: ValentineFormThreeComponent;
  let fixture: ComponentFixture<ValentineFormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineFormThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
