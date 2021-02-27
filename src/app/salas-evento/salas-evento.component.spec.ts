import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasEventoComponent } from './salas-evento.component';

describe('SalasEventoComponent', () => {
  let component: SalasEventoComponent;
  let fixture: ComponentFixture<SalasEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
