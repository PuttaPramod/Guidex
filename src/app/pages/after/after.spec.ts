import { ComponentFixture, TestBed } from '@angular/core/testing';

import { After } from './after.component';

describe('After', () => {
  let component: After;
  let fixture: ComponentFixture<After>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [After]
    })
    .compileComponents();

    fixture = TestBed.createComponent(After);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
