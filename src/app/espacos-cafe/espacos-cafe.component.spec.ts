import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacosCafeComponent } from './espacos-cafe.component';

describe('EspacosCafeComponent', () => {
  let component: EspacosCafeComponent;
  let fixture: ComponentFixture<EspacosCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacosCafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacosCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
