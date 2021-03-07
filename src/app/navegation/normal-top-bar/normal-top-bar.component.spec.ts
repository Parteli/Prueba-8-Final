import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTopBarComponent } from './normal-top-bar.component';

describe('NormalTopBarComponent', () => {
  let component: NormalTopBarComponent;
  let fixture: ComponentFixture<NormalTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
