import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineFormComponent } from './valentine-form.component';

describe('ValentineFormComponent', () => {
  let component: ValentineFormComponent;
  let fixture: ComponentFixture<ValentineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
