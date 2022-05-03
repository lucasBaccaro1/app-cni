import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeracionComponent } from './refrigeracion.component';

describe('RefrigeracionComponent', () => {
  let component: RefrigeracionComponent;
  let fixture: ComponentFixture<RefrigeracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
