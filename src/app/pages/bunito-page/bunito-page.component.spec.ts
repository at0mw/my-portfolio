import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunitoPageComponent } from './bunito-page.component';

describe('BunitoPageComponent', () => {
  let component: BunitoPageComponent;
  let fixture: ComponentFixture<BunitoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BunitoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BunitoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
