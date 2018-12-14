/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KomikStartComponent } from './komik-start.component';

describe('KomikStartComponent', () => {
  let component: KomikStartComponent;
  let fixture: ComponentFixture<KomikStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomikStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomikStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
