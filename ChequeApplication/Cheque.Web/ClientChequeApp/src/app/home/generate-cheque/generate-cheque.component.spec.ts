import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateChequeComponent } from './generate-cheque.component';

describe('GenerateChequeComponent', () => {
  let component: GenerateChequeComponent;
  let fixture: ComponentFixture<GenerateChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
