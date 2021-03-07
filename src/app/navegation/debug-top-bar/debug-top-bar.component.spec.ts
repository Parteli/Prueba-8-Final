import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugTopBarComponent } from './debug-top-bar.component';

describe('DebugTopBarComponent', () => {
  let component: DebugTopBarComponent;
  let fixture: ComponentFixture<DebugTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
