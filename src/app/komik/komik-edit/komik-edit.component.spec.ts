/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KomikEditComponent } from './komik-edit.component';

describe('KomikEditComponent', () => {
  let component: KomikEditComponent;
  let fixture: ComponentFixture<KomikEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomikEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomikEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
