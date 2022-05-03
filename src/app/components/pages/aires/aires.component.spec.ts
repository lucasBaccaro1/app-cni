import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiresComponent } from './aires.component';

describe('AiresComponent', () => {
  let component: AiresComponent;
  let fixture: ComponentFixture<AiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
