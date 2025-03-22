import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegecustomerComponent } from './manegecustomer.component';

describe('ManegecustomerComponent', () => {
  let component: ManegecustomerComponent;
  let fixture: ComponentFixture<ManegecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManegecustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManegecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
