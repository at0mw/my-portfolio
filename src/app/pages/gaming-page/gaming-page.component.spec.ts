import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingPageComponent } from './gaming-page.component';

describe('GamingPageComponent', () => {
  let component: GamingPageComponent;
  let fixture: ComponentFixture<GamingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
