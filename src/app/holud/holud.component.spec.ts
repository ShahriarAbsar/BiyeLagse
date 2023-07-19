import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoludComponent } from './holud.component';

describe('HoludComponent', () => {
  let component: HoludComponent;
  let fixture: ComponentFixture<HoludComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoludComponent]
    });
    fixture = TestBed.createComponent(HoludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
