import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdComponent } from './all-prod.component';

describe('AllProdComponent', () => {
  let component: AllProdComponent;
  let fixture: ComponentFixture<AllProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProdComponent]
    });
    fixture = TestBed.createComponent(AllProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
