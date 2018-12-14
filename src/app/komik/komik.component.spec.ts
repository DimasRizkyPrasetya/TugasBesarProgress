import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomikComponent } from './komik.component';

describe('KomikComponent', () => {
  let component: KomikComponent;
  let fixture: ComponentFixture<KomikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
