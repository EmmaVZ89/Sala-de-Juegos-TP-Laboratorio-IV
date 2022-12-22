import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegodelavidaComponent } from './juegodelavida.component';

describe('JuegodelavidaComponent', () => {
  let component: JuegodelavidaComponent;
  let fixture: ComponentFixture<JuegodelavidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegodelavidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegodelavidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
