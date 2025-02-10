import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningTesseractComponent } from './spinning-tesseract.component';

describe('SpinningTesseractComponent', () => {
  let component: SpinningTesseractComponent;
  let fixture: ComponentFixture<SpinningTesseractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinningTesseractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinningTesseractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
