import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAnalyzerComponent } from './password-analyzer.component';

describe('PasswordAnalyzerComponent', () => {
  let component: PasswordAnalyzerComponent;
  let fixture: ComponentFixture<PasswordAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
